// Please do npm i to get scss packages installed

import "./App.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="text-reg" style={{ paddingTop: "4.725rem" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
