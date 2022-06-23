import React from "react";
import { Header } from "@components/Header/";
import { Home } from "@components/pages/Home/";
import { Footer } from "@components/Footer/";

const App = () => {
  return (
    <div className="page">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export { App };
