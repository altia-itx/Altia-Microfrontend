import React from "react";
import { createRoot } from "react-dom/client";

const RemoteButton = React.lazy(() => import("remote/Button"));

const App = () => (
  <div>
    <h1>Microfrontend App 1</h1>
    <React.Suspense fallback={<div>Loading...</div>}>
      <RemoteButton />
    </React.Suspense>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
