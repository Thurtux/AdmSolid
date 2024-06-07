import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import NavLateral from './components/NavLateral';

export default function App() {
  return (
    <Router
      root={props => (
        <>
        <div class="flex h-screen w-full">
          <NavLateral />
          <div class="flex-1 ml-64 overflow-auto">
          <div class="h-full"><Suspense>{props.children}</Suspense></div></div>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
