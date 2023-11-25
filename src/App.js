import "./App.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="text-reg">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
