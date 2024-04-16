import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./App.css";

export default function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      <div className="container px-0">
        <main className="main">
          <div className="row justify-content-between mx-0">
            <Sidebar />

            {router}
          </div>
        </main>
      </div>
    </>
  );
}
