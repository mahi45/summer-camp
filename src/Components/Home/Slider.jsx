import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Pages/Home/styles.css";

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img
            src="https://i.ibb.co/dPsHyCp/Banner1.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img
            src="https://i.ibb.co/Bg15tRw/Banner2.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img
            src="https://i.ibb.co/dr8rMVp/Banner3.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img
            src="https://i.ibb.co/dPsHyCp/Banner1.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img
            src="https://i.ibb.co/dPsHyCp/Banner1.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img
            src="https://i.ibb.co/dPsHyCp/Banner1.png"
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
