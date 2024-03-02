import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import "../styles/styles.css";

//Only for development – using dummy data instead of API
import dummydata from "../config/dummydata/dummydata-drinks.js";

export const RandomDrinks = () => {
  const [data, setData] = useState(null);

  //For production - API call
  // useEffect(() => {
  //   fetch(
  //     "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=8c7408891f0843b7a5b62b8bd041580d"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, []);

  //Only for development – using dummy data instead of API
  useEffect(() => {
    setData(dummydata());
  }, []);

  return (
    <div>
      <div>
        <div className="flex gap-5 items-center justify-center swiper-slider">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 15,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              },
            }}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              reverseDirection: false,
              pauseOnMouseEnter: true,
            }}
            speed={8000}>
            {data
              ? data.results.map((recipe) => (
                  <SwiperSlide
                    key={recipe.id}
                    className="p-3 gap-10 bg-gray-300 rounded-lg swiper-slider">
                    <img
                      className="mb-2 rounded-lg h-auto"
                      src={recipe.image}
                      alt={recipe.title}
                    />

                    <div className="mb-1 text-md text-gray-800">
                      {recipe.title}
                    </div>
                    <div className="text-xs text-gray-800">
                      {recipe.preptime}
                    </div>
                    <div className="text-xs text-gray-800">{recipe.rating}</div>
                  </SwiperSlide>
                ))
              : "Loading..."}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
