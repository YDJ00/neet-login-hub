
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

// Check if user is logged in
export const isLoggedIn = async (): Promise<boolean> => {
  try {
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

// Redirect to login if not logged in
export const redirectToLoginIfNeeded = async (navigate: any): Promise<boolean> => {
  try {
    const loggedIn = await isLoggedIn();
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
