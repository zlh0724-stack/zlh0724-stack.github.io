import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Diary from "@/pages/Diary";
import Gallery from "@/pages/Gallery";
import Notes from "@/pages/Notes";
import Videos from "@/pages/Videos";
import DiaryDetail from "@/pages/DiaryDetail";
import NoteDetail from "@/pages/NoteDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diary" component={Diary} />
      <Route path="/diary/:slug" component={DiaryDetail} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/notes" component={Notes} />
      <Route path="/note/:slug" component={NoteDetail} />
      <Route path="/videos" component={Videos} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    
  );
}

export default App;
