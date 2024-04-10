import { useEffect } from "react";
import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";

export default function Parallax() {
  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <div data-jarallax>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%",height: "700px" }}
      >
        <source
          src="/img/video/video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
