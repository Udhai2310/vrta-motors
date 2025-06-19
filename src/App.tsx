import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact";//i added this line
import Layout from "./pages/layouts";//line added 
import About from "./pages/about"; //i added this line
import ReadMore from "./pages/ReadMore";
import { useEffect } from "react";




const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
          <Route index element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} /> {/* Added contact route -- i added  */}
          <Route path="/about" element={<About />} /> {/* Added about route */}
          <Route path="/readmore" element={<ReadMore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
