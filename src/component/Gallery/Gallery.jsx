import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/1.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/2.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/3.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/4.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/5.jpg",
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  return (
    <div className="container">
      <div className=" py-32">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex items-start flex-col md:flex-row mb-20"
        >
          <div className=" w-full md:w-[34%]">
            <div className=" border-b-[1px] border-neutral-100 uppercase text-sm tracking-widest mb-4 mx-3 px-5 pt-2 pb-3 relative before:w-[6px] before:h-[6px] before:bg-theme-color before:absolute before:rounded-full before:top-[15px] before:left-1">
              Images
            </div>
          </div>
          <div className="w-full md:w-[66%] px-3">
            <h2 className=" uppercase text-4xl font-heading leading-[56px] tracking-wider mb-7">
              Image <span className=" text-theme-color">Gallery</span>
            </h2>
            <p className=" text-neutral-500">
              Architecture viverra tristique justo duis vitae diaminte neque
              nivamus aestan ateuene artines ariianu the ateliten finibus
              viverra nec lacus in the nedana mis erodino. Design nila iman the
              finise viverra nec a lacus miss viventa in the setlien suscipe no
              curabit tristue the seneoice misuscipit non sagie the fermen.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mx-3 justify-between select-none">
          {images.map((image, index) => (
            <div
              onClick={() => openLightbox(index)}
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
              data-aos-once="true"
              className={`${
                index < 3
                  ? "w-full md:w-[31.6%]"
                  : "w-full md:w-[48.5%]"
              } relative group overflow-hidden after:absolute hover:after:bg-black after:block after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:ease-img-out-expo after:transition-all after:duration-300 cursor-pointer mb-7`}
            >
              <img
                src={image}
                alt={`gallery-${index + 1}`}
                className="w-full cursor-pointer transition duration-300 ease-img-out-expo group-hover:scale-105"
              />

              <div className=" absolute text-white w-full text-center p-5 box-border left-0 overflow-hidden transition-all duration-300 ease-out-expo group-hover:top-1/2 group-hover:translate-y-[-50%] z-10 ">
                <i className=" not-italic font-icon before:content-['\e659']"></i>
              </div>
            </div>
          ))}

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            currentIndex={currentImage}
            styles={{ container: { backgroundColor: "rgba(11, 11, 11, 0.8)" } }}
            slides={images.map((src, index) => ({
              src,
              alt: `image ${index + 1}`,
              width: 1200,
              height: 750,
            }))}
            plugins={[Counter]}
            counter={{
              container: {
                style: {
                  top: "unset",
                  bottom: 0,
                  left: "unset",
                  right: 0,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );

}

export default Gallery;