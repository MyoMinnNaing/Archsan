import React, { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Slider from "./Slider";

const LandingPage = () => {
  const infos = [
    {
      id: 1,
      project: " Project P.01",
      title: "Ultra-Modern House Design",
      description: `Architecture viverra tristique justo duis vitae diaminte
      neque nivamus aestan ateuene artine aringianu the miss
      finibus viverra lacus fermen.`,
      bgImage:
        "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/1.jpg",
    },

    {
      id: 2,
      project: " Project P.02",
      title: " ULTRA-LUXURIOUS VILLA",
      description: `Architecture viverra tristique justo duis vitae diaminte
      neque nivamus aestan ateuene artine aringianu the miss
      finibus viverra lacus fermen.`,
      bgImage:
        "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/2.jpg",
    },

    {
      id: 3,
      project: " Project P.03",
      title: "   MODERNITY IN THE NATURE",
      description: `Architecture viverra tristique justo duis vitae diaminte
      neque nivamus aestan ateuene artine aringianu the miss
      finibus viverra lacus fermen.`,
      bgImage:
        "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/3.jpg",
    },
  ];
  return (
    <Splide
      hasTrack={false}
      options={{
        type: "fade",
        rewind: true,
        gap: "1rem",
        speed: 3000,
        pagination: false,
      }}
    >
      <SplideTrack>
        {infos.map((info) => {
          return (
            <SplideSlide key={info.id}>
              <Slider info={info} />
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
};

export default LandingPage;
