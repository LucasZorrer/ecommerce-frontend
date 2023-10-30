import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Links from "./components/Links/Links";

function App() {
  return (
    <div className="App">
      <Header />
      <Links />
      <Outlet />
    </div>
  );
}

export default App;
