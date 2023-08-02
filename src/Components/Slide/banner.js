import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const ProductSlide = ({ products }) => {
  return (
    <div className="">
      {products.map((product, ind) => (
        <SwiperSlide key={ind}>
          <div className="w-[390px] h-[430px]">
            <img
              src={product.url}
              alt="#error"
              className="w-[390px] h-[230px] object-contain"
            />
            <div className="mt-3">
              <p className="text-lg font-bold mb-4 text-primary">
                {product.title}
              </p>
              <p className="text-[15px] leading-7 text-[#777777]">
                {product.desc}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </div>
  );
};

export default ProductSlide;
