import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Food.css";
import { FaCheckCircle } from "react-icons/fa";

// import instrument1 from "../assets/instrumentation/instrumentation1.jpg";
// import instrument2 from "../assets/instrumentation/instrumentation2.jpg";
// import instrument3 from "../assets/instrumentation/instrumentation3.jpg";
// import instrument4 from "../assets/instrumentation/instrumentation4.jpg";
// import instrument5 from "../assets/instrumentation/instrumentation5.jpg";
// import instrument6 from "../assets/instrumentation/instrumentation6.jpg";
// import instrument7 from "../assets/instrumentation/instrumentation7.jpg";
// import instrument8 from "../assets/instrumentation/instrumentation8.jpg";
// import instrument9 from "../assets/instrumentation/instrumentation9.jpg";

const instruments = [
  ["AAS", "HPLC with all detector", "Dust Sampler", "Spares & Acc. For WM-solar Radiation Sensor"],
  ["GCMS", "Automatic Potentiometer Titrator", "Personal Sampler VOC", "Handy Sampler APM-821"],
  ["Flame Photometer", "Kjeloplus nitrogen estimation system", "Stack Sampler VSS 1 PLS", "PM1 Particulate Sampler APM577"],
  ["pH Meter", "Distillation Unit", "Sound Level Meter SLM-109", "CO Analyser"],
  ["Conductivity Meter", "Orbital Shaker Sprecta Lab", "Micro-Metero Monitor", "Internal Pump Co Analyser"],
  ["Spectrophotometer UV", "Mobile Soil Lab", "Spares & Acc. For Rainfall Sensor", ""],
  ["ICP-OES", "", "", ""]
];

// const images = [
//   { src: instrument1, alt: "Lab Equipment 1" },
//   { src: instrument2, alt: "Lab Equipment 2" },
//   { src: instrument3, alt: "Lab Equipment 3" },
//   { src: instrument4, alt: "Lab Equipment 4" },
//   { src: instrument5, alt: "Lab Equipment 5" },
//   { src: instrument6, alt: "Lab Equipment 6" },
//   { src: instrument7, alt: "Lab Equipment 7" },
//   { src: instrument8, alt: "Lab Equipment 8" },
//   { src: instrument9, alt: "Lab Equipment 9" }
// ];

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="infrastructure-section">
      {/* Breadcrumb */}
      {/* <div className="breadcrumb" data-aos="fade-in">
        <span>Home &gt; Services &gt; Infrastructure</span>
      </div> */}

      {/* Title */}
      <div className="instrument-header" data-aos="zoom-in">
        <h2>Instrumentation</h2>
        <a href="#" className="instrument-link">
          {/* <FaCheckCircle className="check-icon" /> */}
          Instrument List - Exilieen Scientific Research LLP
        </a>
      </div>

      {/* Instrument Grid */}
      <div className="instrument-grid" data-aos="fade-up">
        {Array.from({ length: 4 }, (_, colIndex) => (
          <ul key={colIndex}>
            {instruments
              .map((row) => row[colIndex])
              .filter(Boolean)
              .map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
          </ul>
        ))}
      </div>

      {/* Carousel Section
      <div className="ai-section" data-aos="fade-up">
        <h2 className="ai-title">Analytical Infrastructure</h2>
        <p className="ai-subtitle">
          We are equipped with a wide range of excellent testing facilities.
        </p> */}

        {/* <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          loop
          autoplay={{ delay: 3000 }}
          className="ai-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="slide-wrapper" data-aos="zoom-in">
                <img src={img.src} alt={img.alt} className="ai-image" />
                <p className="ai-caption">{img.alt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    // </div>
  );
};

export default Infrastructure;
