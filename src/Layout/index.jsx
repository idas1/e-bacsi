import StreetRouter from "../Router";
import Footer from "./footer";
import Header from "./header";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Header />
        <StreetRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
