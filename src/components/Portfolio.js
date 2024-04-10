import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../swiperSliderProps";

const IMAGES = [
  {
    src: "/img/portfolio/picsovannara.jpg",
    thumbnail: "/img/portfolio/picsovannara.jpg",
  },
  {
    src: "/img/portfolio/Song_Sokhavuthi.jpg",
    thumbnail: "/img/portfolio/Song_Sokhavuthi.jpg"
  },

  {
    src: "/img/portfolio/Ley_Kimteng.jpg",
    thumbnail: "/img/portfolio/Ley_Kimteng.jpg"
  },
  {
    src: "/img/portfolio/poster_majors.jpg",
    thumbnail: "/img/portfolio/poster_majors.jpg"
  },
  {
    src: "/img/portfolio/intershiptime.jpg",
    thumbnail: "/img/portfolio/intershiptime.jpg"
  },
  {
    src: "/img/portfolio/Elonmask.jpg",
    thumbnail: "/img/portfolio/Elonmask.jpg"
  },
  {
    src: "/img/portfolio/ksi_copy.jpg",
    thumbnail: "/img/portfolio/ksi_copy.jpg"
  },
];

const Portfolio = () => {
  const [showLight, setShowLight] = useState(null);

  return (
    <Fragment>
      <div className="chantha_tm_section" id="portfolio">
        <div className="chantha_tm_portfolio">
          <div className="container">
            <div className="chantha_tm_main_title">
              <span>Portfolio</span>
              <h3>Design Works</h3>
            </div>
            <div
              className="portfolio_list gallery_zoom wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper {...portfolioSlider}>
                    {IMAGES.map((image, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="list_inner">
                          <div className="image">
                            <img src="/img/portfolio/410-460.jpg" alt="" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(" + image.src + ")",
                              }}
                            ></div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="chantha_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
