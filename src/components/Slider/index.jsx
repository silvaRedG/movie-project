/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "./styles";
import { getImages } from "../../utils/getImages";

function Slider({ info, title }) {
  console.log(info, title);

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        className="Swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
                <img src={getImages(item.poster_path)} alt="foto-movie" />
                <h2>{item.original_title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
