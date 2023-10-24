/* eslint-disable jsx-a11y/anchor-is-valid */
import navbar_git_logo from "../images/navbar-github-logo.png";
import img_1 from "../images/Rectangle_181.png";
import img_2 from "../images/Rectangle_182.png";
import footer_github_logo from "../images/navbar-github-logo.png";
import foward_right from "../images/Forward_right.png";
import insta_icon from "../images/insta_icon.svg";
import facebook_icon from "../images/facebook_icon.svg";
import whatsapp_icon from "../images/whatsapp_icon.svg";
import linkedin_icon from "../images/linkedin_icon.svg";
import twitter_icon from "../images/twitter_icon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import People from "./People";
import { PeopleData, responsive } from "./data";
export default function LandingScreen() {
  function scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").slice(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="main_page bg-[#060A16] font-poppins">
      <div className="navbar pt-[49px] pl-[176px] flex">
        <div className="bg-[#181818] h-[71px] w-[953px] pt-[18px] flex justify-around text-white font-extrabold text-[20px] rounded-[25px]">
          <a className="home-btn" href="#home" onClick={scrollToSection}>
            Home
          </a>
          <a
            href="#discover"
            className="discover-btn"
            onClick={scrollToSection}
          >
            Discover
          </a>
          <div className="navbar-git-logo">
            <img
              alt="img"
              src={navbar_git_logo}
              style={{
                height: "40px",
                width: "39.5px",
                fill: "rgba(217, 217, 217, 0.00)",
                strokeWidth: "5px",
                stroke: "#FFF",
              }}
            ></img>
          </div>
          <a
            href="#trending"
            className="trending-btn"
            onClick={scrollToSection}
          >
            Trending
          </a>
          <a href="#aboutus" className="about-btn" onClick={scrollToSection}>
            About Us
          </a>
        </div>
        <div className="text-[#8268FD] pt-[18px] pl-[69px] font-extrabold text-[20px]">
          <a href="/login">Login/Register</a>
        </div>
      </div>
      <div className="text_video flex">
        <div className="main-text text-left w-[503px] ml-[105px] mt-[65px]">
          <div className="text-white font-[700] leading-[110.5px] text-[75px]">
            Welcome to <span className="text-[#8268FD]">G-Projects.</span>
          </div>
          <div className="text-[#909090] text-[22px] leading-[32.5px] mt-[45px]">
            Lorem ipsum dolor sit amet, consectetur adipiscat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </div>
        </div>
        <div
          className="globe_video z-50 w-[703px] h-[466px] mt-[50px] ml-[165px]"
          style={{
            borderRadius: "50px",
            border: "1px solid #75BD84",
            background: "rgba(217, 217, 217, 0.05)",
            boxShadow: "0px 4px 12px 0px rgba(255, 255, 255, 0.25) inset",
            backdropFilter: "blur(25px)",
          }}
        ></div>
      </div>
      {/*
      <div className="vector_20 relative w-[220px] left-[1060px] bottom-[50px]">
        <img src={vector_20}></img>
      </div>
   
      <div className="forward_icon relative h-[50px] w-[50px] top-[-160px] left-[700px]">
        <img src={forward_icon}></img>
      </div>
     */}
      <br />
      
      <div id="discover" className="text-white text-left mb-20">
        <div className="discover text-white font-extrabold ml-16 text-[60px] mt-16">
          Discover                 

        </div>
        <div className="text-white ml-16 font-poppins text-[20px]">
          Discover the Projects from various enthusiasts around the globe.
        </div>
      </div>
      <br />
      <Carousel responsive={responsive}>
        {PeopleData.map((item) => (
          <People
            name={item.name}
            image={item.imageUrl}
            roll={item.roll_no}
            loc={item.location}
            domain={item.Domain}
            year = {item.year}
            skills={item.skills}
          />
        ))}
      </Carousel>
      ;
      <div id="trending" className="trending_projects bg-[#060A16] text-left">
        <div className="pt-[5px]">
          <div className="text-white ml-16 font-extrabold text-[60px] mt-16">
            Trending Projects
          </div>
          <div className="text-white ml-16  font-poppins text-[20px]">
            Discover the Projects from various enthusiasts around the globe.
          </div>
        </div>

        <section className="text-gray-100">
          <div className="container px-5 py-20 ml-[30px]">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full  rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img_1}
                    alt="blog"
                  />
                  <div className="p-6 bg-[#181921] h-[232px] ml-[11px] ">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      DATA VISUALIZATIONS
                    </h2>
                    <h1 className="title-font text-lg font-medium mb-3">
                      (4/5)
                    </h1>
                    <p className="leading-relaxed mb-3 text-[11px]">
                      A neural network model is a computational framework
                      inspired by the structure and functioning of the human
                      brain's neural networks. It is used for various machine
                      learning tasks, including classification, regression,
                      image and speech recognition, natural language processing,
                      and more.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full  rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img_2}
                    alt="blog"
                  />
                  <div className="p-6 bg-[#181921] h-[232px]">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      LUXURY CAR RENTAL
                    </h2>
                    <h1 className="title-font text-lg font-medium  mb-3">
                      (4/5)
                    </h1>
                    <p className="leading-relaxed mb-3 text-[11px]">
                      The Luxury Car Rental Platform is a web-based application
                      designed to provide users with a seamless and convenient
                      way to rent high-end and luxury vehicles for various
                      occasions. This platform aims to offer a curated selection
                      of luxury cars.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full  rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img_2}
                    alt="blog"
                  />
                  <div className="p-6 bg-[#181921] h-[232px]">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      DATA VISUALIZATIONS
                    </h2>
                    <h1 className="title-font text-lg font-medium mb-3">
                      (4/5)
                    </h1>
                    <p className="leading-relaxed mb-3 text-[11px]">
                      A neural network model is a computational framework
                      inspired by the structure and functioning of the human
                      brain's neural networks. It is used for various machine
                      learning tasks, including classification, regression,
                      image and speech recognition, natural language processing,
                      and more.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <div className="group_113 w-[270px] h-[270px] relative left-[1205px] bottom-[790px]">
          <img src={group_113}></img>
        </div>

        <div className="vector_23 w-[6px] h-[0px] relative left-[1340px] bottom-[580px]">
          <img src={vector_23}></img>
        </div>
      
*/}
      </div>
      <div id="aboutus" className="about_us text-left">
        <div className="about_us_text text-white text-[60px] font-[800] ml-[56px]">
          About Us
        </div>
        <div className="text-[25px] w-[1000px] text-white ml-[56px] mt-[20px]">
          Our GitHub community is a vibrant and collaborative space where
          developers, enthusiasts, and innovators from around the world come
          together to share, learn, and build amazing projects. We're passionate
          about technology, open source, and the power of collaboration.
          <br />
          <br />
          <br /> Ready to be part of something exciting? Join our GitHub
          community today! Whether you're a seasoned developer or just starting
          your coding journey, there's a place for you here. Get started by
          exploring our repositories, participating in discussions, or attending
          one of our upcoming events. Together, we'll code, create, and make a
          difference in the tech world.
          <br /> Join us in shaping the future of technology, one commit at a
          time.
        </div>
      </div><br />
        <br/><br/><br/><br/><br/><br/><br/>
      <div
        className="footer h-[591px] "
        style={{
          background: "rgba(16, 16, 16, 0.40)",
          backdropFilter: "blur(17px)",
        }}
      >
        <footer className="bg-[#060A16]">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-poppins items-center md:justify-start justify-center text-white-900 relative top-[-100px]">
                <img className=""
                  src={footer_github_logo}
                  alt="github_icon"
                  style={{
                    height: "55px",
                    width: "55px",
                    fill: "rgba(217, 217, 217, 0.00)",
                    strokeWidth: "5px",
                    stroke: "#FFF",
                  }}
                />
                
                <span className="ml-3 text-xl my-auto text-white">
                  Github Gitam Community
                </span>
              </a>
              <div>
                
                <p
                  className="mt-20 text-white font-poppins italic text-4xl"
                  style={{ lineHeight: "48px" }}
                >
                  Any Queries? <br />
                  Feel free to reach us out!
                </p>
              </div>

              <input
                type="mail"
                name="email"
                value=""
                style={{ width: "395px", height: "53px" }}
                className="rounded-xl"
              />
              <div className="forward_right relative right-[-410px] top-[-40px]">
                <img src={foward_right} alt="Right Arrow" />
              </div>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w2/4 md:w-1/2 w-full px-4 relative right-[-740px] bottom-[-150px]">
                <h2 className="title-font font-medium text-white  text-sm mb-3">
                  Links
                </h2>
                <nav className="list-none">
                  <li>
                    <a href="/" onClick={scrollToSection} className="text-white">Home</a>
                  </li>
                  <li>
                    <a href="#discover" onClick={scrollToSection} className="text-white">Discover</a>
                  </li>
                  <li>
                    <a href="#trending" onClick={scrollToSection} className="text-white">Trending</a>
                  </li>
                  <li>
                    <a href="#aboutus" onClick={scrollToSection} className="text-white">About Us</a>
                  </li>
                </nav>
              </div>
            </div>
            <div className="relative top-[410px] text-center ]">
  <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <div className="inline-flex relative left-[-700px]">
      <a className="text-gray-500">
        <img
          src={insta_icon}
          alt="instagram"
          style={{ width: "40px", height: "30px" }}
        />
      </a>
      <a className="ml-3 text-gray-500">
        <img
          src={facebook_icon}
          alt="facebook"
          style={{ width: "40px", height: "30px" }}
        />
      </a>
      <a className="ml-3 text-gray-500">
        <img
          src={linkedin_icon}
          alt="linkedin"
          style={{ width: "40px", height: "30px" }}
        />
      </a>
      <a className="ml-3 text-gray-500">
        <img
          src={whatsapp_icon}
          alt="whatsapp"
          style={{ width: "40px", height: "30px" }}
        />
      </a>
      <a className="ml-3 text-gray-500">
        <img
          src={twitter_icon}
          alt="twitter"
          style={{ width: "40px", height: "30px" }}
        />
      </a>
    </div>
    <div className="text-center relative left-[-350px] sm:text-left">
  <p className="text-white text-center">Gitam University</p>
  <p className="text-gray-500 text-sm">
    © 2023 Github Community
    <a
      href="/"
      rel="noopener noreferrer"
      className="text-gray-600 ml-1"
      target="_blank"
    >
      | All Rights Reserved.
    </a>
  </p>
</div>

   
  </div>
</div>

          </div>
        </footer>
      </div>
    </div>
  );
}
