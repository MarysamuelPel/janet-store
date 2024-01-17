import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Janet's Beauty Store is my go-to for all things beauty! From getting braids to trying out their spa services, every visit leaves me feeling pampered and confident. Highly recommended!",
    },
    {
      img: profilePic2,
      review:
        "Janet's Store is a hidden gem for beauty services. I recently got a wig installation, and I'm beyond impressed with the quality and professionalism. The staff is friendly, and the ambiance is relaxing. They have a wide range of beauty treatments, making it a one-stop-shop for all your beauty needs.",
    },
    {
      img: profilePic3,
      review:
        "As a guy, I was initially hesitant to try a unisex beauty store, but Janet's exceeded my expectations! The barbing service is top-notch, and they have a great selection of grooming products. The atmosphere is welcoming, and the staff is skilled. I've found my new spot for haircuts and grooming.",
    },
    {
      img: profilePic4,
      review:
        "Janet's Beauty Store offers a fantastic range of services. I recently tried their hair coloring, and the results were amazing!The store is clean, and they follow strict hygiene standards. I'm looking forward to trying more services in the future.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Our Customers always get </span>
        <span>The Best Work </span>
        <span>from us...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
