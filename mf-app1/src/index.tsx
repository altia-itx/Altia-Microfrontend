
import React from "react";
import { createRoot } from "react-dom/client";
import('remote/index.css');
const RemoteButton = React.lazy(() => import("remote/Button"));
import Header from "@components/Header";


const App = () => (
  <div>
    <Header></Header>
    <React.Suspense fallback={<div>Loading...</div>}>
      <RemoteButton />
    </React.Suspense>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
