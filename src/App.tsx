import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PartyThoughtSection from "./components/PartyThoughtSection";
import PartyThoughtDetail from "./components/PartyThoughtDetail";
import { Scroll } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";
import StatePhilosophyDetail from "./components/StatePhilosophyDetail";
import ContemporaryValueDetail from "./components/ContemporaryValueDetail";
import IntegrityDetail from "./components/IntegrityDetail";
import ChatBox from "./components/ChatBox";
import ExecutiveDetail from "./components/ExecutiveDetail";
import QuizPage from "./components/QuizPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/party-thought-detail/:section"
            element={<PartyThoughtDetail />}
          />
          <Route
            path="/state-philosophy-detail/:section"
            element={<StatePhilosophyDetail />}
          />
          <Route
            path="/contemporary-value-detail/:section"
            element={<ContemporaryValueDetail />}
          />
          <Route
            path="integrity-detail/:section"
            element={<IntegrityDetail />}
          />
          <Route
            path="executive-detail/:section"
            element={<ExecutiveDetail />}
          />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
        <ChatBox />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
