
import { supabase } from "@/integrations/supabase/client";

// Check if user is logged in
export const isLoggedIn = async (): Promise<boolean> => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};

// Redirect to login if not logged in
export const redirectToLoginIfNeeded = async (navigate: any): Promise<boolean> => {
  const loggedIn = await isLoggedIn();
  if (!loggedIn) {
    navigate('/login');
    return false;
  }
  return true;
};
