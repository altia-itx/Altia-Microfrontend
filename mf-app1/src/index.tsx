import React from "react";
import { createRoot } from "react-dom/client";
import("remote/index.css");
const RemoteButton = React.lazy(() => import("remote/Button"));
const RemoteQueryComponent = React.lazy(() => import("mfApp3/QueryComponent"));
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@components/custom/Header";
import CustomFilter from "@components/custom/customFilter";

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col" >
          <div className="mb-8">
            <Header />
          </div>
          <div>
            <CustomFilter />
          </div>
        </div>
        <RemoteQueryComponent />
        <RemoteButton />
      </React.Suspense>
    </div>
  </QueryClientProvider>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
