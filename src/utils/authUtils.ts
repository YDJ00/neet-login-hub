
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

// Check if user is logged in
export const isLoggedIn = async (): Promise<boolean> => {
  try {
    // First check localStorage for faster response
    const mobile = localStorage.getItem('neet_user_mobile');
    if (mobile) {
      return true;
    }

    // Double check with supabase auth for more secure apps
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error checking auth status:", error);
      return false;
    }
    return !!data.session;
  } catch (err) {
    console.error("Exception while checking auth status:", err);
    return false;
  }
};

// Global authentication state
let globalAuthState = false;

// Initialize the global auth state
export const initializeAuthState = async (): Promise<void> => {
  globalAuthState = await isLoggedIn();
  console.log("Auth state initialized:", globalAuthState);
};

// Get current auth state without async
export const getAuthState = (): boolean => {
  return globalAuthState;
};

// Update global auth state
export const setAuthState = (state: boolean): void => {
  globalAuthState = state;
  console.log("Auth state updated:", globalAuthState);
};

// Redirect to login if not logged in
export const redirectToLoginIfNeeded = async (navigate: any): Promise<boolean> => {
  try {
    // Initialize auth state if not already
    if (!globalAuthState) {
      await initializeAuthState();
    }
    
    // Check auth state
    const loggedIn = globalAuthState;
    if (!loggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please login to access this feature",
      });
      navigate('/login');
      return false;
    }
    return true;
  } catch (err) {
    console.error("Exception during login redirect:", err);
    navigate('/login');
    return false;
  }
};
