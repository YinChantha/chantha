import React, { useState } from "react";
import { HomeModal } from "./ContentModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    content: "",
  });

  const content = {
    WebDevelopment: `
    <p>
      I am a Frontend Web developer with a
      design that creates innovative, effective websites that
      capture your brand, improve your conversion rates, and
      maximize your revenue to help grow your business and achieve
      your goals.
    </p>
    <p>
      In today’s digital world, your website is the first
      interaction consumers have with your business. That's why
      almost percent of the user’s first impression relates to
      web design which show the interaction to what is that’s business.
    </p>
    <p>
      That’s why more companies are not only reevaluating their
      website’s design but also partnering with Frontend Developer,I am confident that I can design a custom
      website that help growth for your unique business.
    </p>
    `,
    DigitalMarketing: `
      <p>
        As a digital marketer at KIRIROM Institute of Technology and Vkirirom Pine Resort, my role was to enhance the resort's visibility and reputation,
        positioning it as a premier destination in Asia and around the world to atracting peoples. 
      </p>
      <p>
        In digital marketing team i serve with digital marketing strategy's essential for businesses looking, By shooting 
        the createtivity video, Graphic photo and edit video to promote on the facebook page.
      </p>
      <p>
        My efforts in digital marketing were guided by a thorough understanding of the target audience and market trends.
        My team's continuously monitored the performance of our digital campaigns, analyzing metrics such as engagement rates, reach, and conversion rates. 
        Based on these insights, We refined our strategies to optimize results and achieve our business objectives.
      </p>
      Access my Google Drive folder <a href="https://drive.google.com/drive/folders/1jUZZN0ORbMr2q5wjM0wJRBM0MiBNmtpP" target="_blank">here</a>.
    `,
    GraphicDesign: `
      <p>
        In addition to its role in branding and user experience, graphic design also contributes to the effectiveness of marketing and advertising efforts.
        Whether it's designing eye-catching advertisements, creating compelling visual content for social media campaigns, or developing impactful print materials, 
        graphic designers are instrumental in bringing marketing strategies by combining creativity with strategic thinking,
        help businesses communicate their messages effectively and stand out in a crowded marketplace.
      </p>
      <p>
        I am a graphic designer by served to KIRIROM Institute of Technology and Vkirirom Pine Resort
        to grow thier business as well as my personal skill grow
      </p>
    `,
  };

  const onOpenModal = (img, title, key) => {
    setOpen(true);
    setModalValue({
      img: img,
      title: title,
      content: content[key],
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", content: "" });
  };

  return (
    <div className="chantha_tm_section" id="home">
      <div className="chantha_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <span className="name">Yin Chantha</span>
              <h3 className="job">Designer and Frontend Developer</h3>
              <div className="services">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/Webdevelopment.jpg",
                          "WebDevelopment",
                          "WebDevelopment"
                        )
                      }
                    >
                      <span>Web Development</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/digitalmarketing.jpg",
                          "Digital Marketing",
                          "DigitalMarketing"
                        )
                      }
                    >
                      <span>Digital Marketing</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/graphicdesign.jpg",
                          "Graphic Design",
                          "GraphicDesign"
                        )
                      }
                    >
                      <span>Graphic Design</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>3+</h3>
                      <span>
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src="/img/thumbs/3-4.jpg" alt="" />
                <div
                  className="main"
                  style={{ backgroundImage: "url(img/hero/chantha.jpg)" }}
                ></div>
                <div className="shape"></div>
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        content={modalValue.content}
      />
    </div>
  );
};

export default Home;
