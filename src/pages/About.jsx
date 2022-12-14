import Banner from "../components/Banner";
import aboutData from "../Datas/About";
import Collapse from "../components/Collapse";
import imageBanner from "../assets/images/aboutbannerDesktop.png";

const About = () => {
    const content = (title) => {
      switch (title) {
        case "fiability":
          return aboutData.fiability;
        case "respect":
          return aboutData.respect;
        case "service":
          return aboutData.service;
        case "security":
          return aboutData.security;
        default:
          console.log("default");
          break;
      }
    };

return (
    <main className="main">
      <Banner image={imageBanner} />
        <section className="about">
            <div className="about__dropdowns">
                <Collapse title="Fiabilité" content={content("fiability")} />
                <Collapse title="Respect" content={content("respect")} />
                <Collapse title="Service" content={content("service")} />
                <Collapse title="Sécurité" content={content("security")} />
            </div>
        </section>
    </main>
    );
};  

export default About;