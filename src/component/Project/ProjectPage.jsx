import React, { useState } from "react";



const ProjectPage = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <section>
        <div className="container relative py-[120px]">
          <div className="grid grid-rows-12">
            <div className="row-span-12 px-3">
              <h2 className="font-heading text-[#1b1b1b] text-4xl font-normal mb-5 leading-6 tracking-[3px] [word-spacing:5px]">
                ULTRA-MODERN HOUSE DESIGN
              </h2>
              <p className="text-[15px] leading-7 text-[#777] font-normal mb-5">
                Nam rhoncus euismod eros. Integer fringilla varius leo, eget
                volutpat eros convalist. Nulla non nisl orci. Donec ornare
                ullamcorper nunc elementum placerat urabitur massa ante, iaculis
                a enim porta, iaculis. Quisque gravida eros ut turpis interdum
                ornare. Interdum et malesu they adamale fames ac ante ipsum
                primis in faucibus curabitur arcu erosite feugiat in tortor in,
                volutpat sollicitudin libero maecenas nisl est conselur rhoncus
                loremir consequat et, finibus nec purus.
              </p>
            </div>
          </div>


         
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
