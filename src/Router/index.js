import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import NotFound from "../Pages/404page";
import ServicesMedical from "../Pages/servicesMedical";
import Introduce from "../Pages/Introduce";
import DetailServices from "../Pages/detailServices";
import ConsultationForm from "../Pages/consultationForm";
import News from "../Pages/news";

function StreetRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/gioi-thieu' element={<Introduce />} />
      <Route path='/cac-goi-dich-vu-y-te' element={<ServicesMedical />}></Route>
      <Route path='/cac-goi-dich-vu-y-te/:slug' element={<DetailServices />} />
      <Route path='/dang-ky-tu-van' element={<ConsultationForm />} />
      <Route path='/tin-tuc' element={<News />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default StreetRouter;
