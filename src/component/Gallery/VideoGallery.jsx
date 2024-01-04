import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const VideoGallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [open, setOpen] = useState(false);
 
  
  const images = [
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/6.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/7.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/8.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/9.jpg",
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/10.jpg",
  ];

  const handleClick = (event) => {
    event.preventDefault(); 
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
              Videos
            </div>
          </div>
          <div className="w-full md:w-[66%] px-3">
            <h2 className=" uppercase text-4xl font-heading leading-[56px] tracking-wider mb-7">
              Video <span className=" text-theme-color">Gallery</span>
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
              data-aos="fade-up"
              data-aos-delay={`${index * 400}`}
              data-aos-once="true"
              key={index}
              className={`${
                index < 2
                  ? "w-full md:w-[48.5%]"
                  : "w-full md:w-[31.6%]"
              } relative group overflow-hidden after:absolute hover:after:bg-black after:block after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:ease-img-out-expo after:transition-all after:duration-300 cursor-pointer mb-7`}
            >
              <img
                src={image}
                alt={`gallery-${index + 1}`}
                className="w-full h-full cursor-pointer transition duration-1000 ease-in-out group-hover:scale-110"
              />

              <a
                onClick={handleClick}
                href="https://youtu.be/StrMabUksTY"
                className="relative scale-125 z-20 ms-5"
              >
                <span className=" absolute z-10 inline-block bottom-10 left-3 bg-theme-color rounded-full text-white shadow-poly py-3 px-4 ">
                  <i className="not-italic font-icon before:content-['\e6ad']"></i>
                </span>
              </a>
            </div>
          ))}

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            styles={{ container: { backgroundColor: "rgba(11, 11, 11, 0.8)" } }}
            slides={[
              {
                type: "video",
                width: 1280,
                height: 720,
                sources: [{
                  src: "/video/youtube-archsan.mp4",
                  type: "video/mp4",
                }]
              },
            ]}
            plugins={[Video]}
            video={{
              playsInline: "true",
              autoPlay: "true",
              loop: "false",
              muted: "true",
              
              
            }}
            
          />
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
