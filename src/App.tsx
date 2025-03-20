
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import AccessNotes from "./pages/AccessNotes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MockTest from "./pages/MockTest";
import Formulas from "./pages/Formulas";
import ChapterWeightage from "./pages/ChapterWeightage";
import { initializeAuthState } from "./utils/authUtils";

const queryClient = new QueryClient();

// Auth initializer component
const AuthInitializer = () => {
  useEffect(() => {
    const init = async () => {
      await initializeAuthState();
    };
    init();
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthInitializer />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/access-notes" element={<AccessNotes />} />
          <Route path="/mock-test" element={<MockTest />} />
          <Route path="/formulas" element={<Formulas />} />
          <Route path="/chapter-weightage" element={<ChapterWeightage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
