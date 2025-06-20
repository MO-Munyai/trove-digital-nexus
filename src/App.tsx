
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Team from "./pages/Team";
import Media from "./pages/Media";
import Submit from "./pages/Submit";
import Events from "./pages/Events";
import Feed from "./pages/Feed";
import JoinUs from "./pages/JoinUs";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Remakes from "./pages/Remakes";
import Convention from "./pages/Convention";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/team" element={<Team />} />
                <Route path="/media" element={<Media />} />
                <Route path="/submit" element={<Submit />} />
                <Route path="/events" element={<Events />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/join" element={<JoinUs />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/remakes" element={<Remakes />} />
                <Route path="/convention" element={<Convention />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
