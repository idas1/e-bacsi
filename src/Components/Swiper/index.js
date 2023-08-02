import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ProductSlide from "../Slide/product";
import PlanSlide from "../Slide/plans";
import DoctorsSlide from "../Slide/doctors";

const CustomSwiper = ({
  data,
  className,
  autoplay,
  slidePerView,
  buttonApi,
  pagination,
  type,
}) => {
  let modules = [Navigation, Autoplay];
  modules = pagination ? [Pagination, Navigation, Autoplay] : modules;
  return (
    <div className={`relative ${className}`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidePerView || 1}
        loop={true}
        className="mySwiper"
        autoplay={autoplay}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={modules}
      >
        {data.map((x, ind) => (
          <SwiperSlide key={ind}>
            {type === "product" ? (
              <ProductSlide product={x} />
            ) : type === "plan" ? (
              <PlanSlide plan={x} />
            ) : type === "doctors" ? (
              <DoctorsSlide doctor={x} />
            ) : (
              <img
                src={x}
                alt="#error"
                className="flex m-auto object-contain"
              />
            )}
          </SwiperSlide>
        ))}
        {buttonApi ? (
          <div className="absolute z-10 w-full top-1/2 -translate-y-full  flex justify-between items-center px-2">
            <PreButton />
            <NextButton />
          </div>
        ) : null}
      </Swiper>
    </div>
  );
};

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <img
      className="cursor-pointer"
      src="/images/arrown-r.png"
      alt=""
      onClick={() => {
        swiper.slideNext();
      }}
    />
  );
};

const PreButton = () => {
  const swiper = useSwiper();
  return (
    <img
      className="cursor-pointer"
      src="/images/arrown-l.png"
      onClick={() => {
        swiper.slidePrev();
      }}
    />
  );
};

export default CustomSwiper;
