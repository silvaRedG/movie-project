/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";


import { Container } from "./styles";
import Card from "../Card";

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
            <Card item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
