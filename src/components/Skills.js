import skill1 from "../assets/img/js.svg";
import skill2 from '../assets/img/vue.svg';
import skill3 from "../assets/img/react.svg";
import skill4 from "../assets/img/flutter.svg";
import skill5 from "../assets/img/mysql.svg";
import skill6 from "../assets/img/mongo.svg";
import skill7 from "../assets/img/nuxt.svg";
import skill8 from "../assets/img/express.svg"
import skill9 from "../assets/img/figma.svg"
import skill10 from "../assets/img/git.svg"
import skill11 from "../assets/img/typescript.svg"
import skill12 from "../assets/img/tailwind.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill mt-4" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <article>
                          <h2>Skills</h2>
                          <p>Technologies and tools that I’ve used to turn ideas into real applications. <br></br>along with the number of projects I’ve completed with each.</p>
                        </article>
                          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="JavaScript" />
                                <p className="skills_title">JavaScript</p>
                                <h5>(10)</h5>
                            </div>
                            <div className="item">
                                <img src={skill11} alt="TypeScript" />
                                <p className="skills_title">TypeScript</p>
                                <h5>(7)</h5>
                            </div>
                            <div className="item">
                                <img src={skill12} alt="Tailwind" />
                                <p className="skills_title">Tailwind</p>
                                <h5>(5)</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Vue" />
                                <p className="skills_title">Vue</p>
                                <h5>(9)</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="React" />
                                <p className="skills_title">React</p>
                                <h5>(7)</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Flutter" />
                                <p className="skills_title">Flutter</p>
                                <h5>(3)</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="MySQL" />
                                <p className="skills_title">MySQL</p>
                                <h5>(15)</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Mongo" />
                                <p className="skills_title">Mongo</p>
                                <h5>(20)</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="Nuxt" />
                                <p className="skills_title">Nuxt</p>
                                <h5>(5)</h5>
                            </div>
                            <div className="item">
                                <img src={skill8} alt="Express" />
                                <p className="skills_title">Express</p>
                                <h5>(20)</h5>
                            </div>
                            <div className="item">
                                <img src={skill9} alt="Figma" />
                                <p className="skills_title">Figma</p>
                                <h5>(∞)</h5>
                            </div>
                            <div className="item">
                                <img src={skill10} alt="Git" />
                                <p className="skills_title">Git</p>
                                <h5>(∞)</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
