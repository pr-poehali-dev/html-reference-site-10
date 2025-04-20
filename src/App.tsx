
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MathPage from "./pages/MathPage";
import PhysicsPage from "./pages/PhysicsPage";
import ChemistryPage from "./pages/ChemistryPage";
import AlgebraPage from "./pages/AlgebraPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/physics" element={<PhysicsPage />} />
          <Route path="/chemistry" element={<ChemistryPage />} />
          <Route path="/algebra" element={<AlgebraPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
