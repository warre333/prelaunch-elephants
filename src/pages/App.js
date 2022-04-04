import '../styles/App.css';
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

import Header from '../components/Header';
import Gif from "../images/gif.mp4";
import IntroVideo from "../images/IntroductionVideo.mp4";
import Roadmap from "../images/Roadmap.png";
import Roadmap2 from "../images/Roadmap2.png";
import About from "../images/About.jpg";

import rarecollectible1 from "../images/rarecollectibles/1.jpg";
import rarecollectible2 from "../images/rarecollectibles/2.jpg";
import rarecollectible3 from "../images/rarecollectibles/3.jpg";
import unkowncollectible from "../images/rarecollectibles/unkown.jpg";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 750 })
  }, [])
  return (
    <div className="App">
      <Header />

      <div className="About">
        <img src={About} className="AboutImage" />
      </div>

      <div id="story" />
 

        {/*<video controls autoPlay loop muted src={Gif} type="video/mp4"></video>*/}

      <div className="IntroVideoWrapper row" data-aos="fade-up" >
        <div className="col-md-5 col-12" data-aos="fade-up">
          <video controls autoPlay loop muted src={IntroVideo} className="IntroVideo"/>
        </div>
        <div className="col" data-aos="fade-up" id="" style={{marginTop: "15vh"}}>
          <h2 className="Title text-md-start text-center">Drippy Elephants Spotted!</h2>
          <h3 className="Text text-md-start text-center blacktext">5555 unique newborn elephants fighting world extinction.</h3>
          <h3 className="Text text-md-start text-center blacktext">Our community will benefit from our utility and gain access to our next collection the Zookeepers. join us for exclusive events.</h3>
          <h3 className="Text text-md-start text-center blacktext">A zoo awaits us in the metaverse!</h3>
        </div>
      </div>


      <div id="roadmap" />
      <div className="Roadmap row" data-aos="fade-up" style={{marginTop: "15vh"}}>
        <div className="col-12 col-lg-6"><img src={Roadmap} className="shadow-lg RoadmapImage" /></div>
        <div className="col-12 col-lg-6"><img src={Roadmap2} className="shadow-lg RoadmapImage" /></div>
        
        
      </div>

      <div id="team" />
      <div className="Team" data-aos="fade-up">
        <h2 className="Title" id="teamTitle">Our Team</h2>

        <div className="row row-cols-lg-4 gy-2 gx-4 justify-content-center">
          
          <div className="col-lg-3" />
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502159382814720/unknown.png?width=358&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Oscar Dos Santos</h4>
              <p className="TeamMemberRole normalfont">Digital marketer and Co-founder</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502159936471060/unknown.png?width=398&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Senne Hubner</h4>
              <p className="TeamMemberRole normalfont">Co-founder and blockchain-expert</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502160959893505/unknown.png?width=667&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Roy Kurilla</h4>
              <p className="TeamMemberRole normalfont">Community manager and investor</p>
            </div>  
          </div>
          <div className="col-lg-3" />
        
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://picsum.photos/200/200.jpg" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">David Tomeček</h4>
              <p className="TeamMemberRole normalfont">Investor and team support</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502160204910612/unknown.png?width=279&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Elias Triekels</h4>
              <p className="TeamMemberRole normalfont">Investor and team support</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502160670470224/unknown.png?width=506&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Arhan Okuyan</h4>
              <p className="TeamMemberRole normalfont">Investor and team support </p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://picsum.photos/200/200.jpg" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Warre Bossaert</h4>
              <p className="TeamMemberRole normalfont">Web 3 developer</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502161391910933/unknown.png?width=676&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Ruben Marques</h4>
              <p className="TeamMemberRole normalfont">Investor and team support</p>
            </div>  
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center Title" data-aos="fade-up" style={{marginTop: "5vh", marginBottom: "2vh"}}>Rare Collectibles</h2>
        
        <div className="row row-cols-md-6 row-cols-3 gy-2" data-aos="fade-up" style={{marginBottom: "10vh"}}>
          <div className="col">
            <img src={rarecollectible1} alt="rarecollectibe" className="rarecollectibe img-fluid rounded"  />
          </div>

          <div className="col">
            <img src={rarecollectible2} alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src={rarecollectible3} alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src={unkowncollectible} alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src={unkowncollectible} alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src={unkowncollectible} alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>
        </div>
      </div>

        <div className="" style={{paddingBottom: "5vh", backgroundColor: "var(--black)"}}>
          <div className="container">
            <h2 className="text-center Title" style={{margin: "2vh 0 2vh 0", color: "var(--white)"}}>Socials</h2>

            <div className="row">
              <div className="col-3">
                <a href="https://www.instagram.com/drippy.elephants/">
                  <img src="https://leesbevorderingindeklas.nl/wp-content/uploads/2020/11/Instagram-logo.png" alt="instagram logo" className="img-fluid rounded w-50" />
                </a>
              </div>    

              <div className="col-3">
                <a href="https://www.tiktok.com/@drippyelephantsnft">
                  <img src="https://cdn.pixabay.com/photo/2021/01/30/06/42/tiktok-5962992_960_720.png" alt="tiktok logo" className="img-fluid rounded w-50" />
                </a>
              </div> 

              <div className="col-3">
                <a href="https://discord.gg/KRA4g7QTSn">
                  <img src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="discord logo" className="img-fluid rounded w-50" />
                </a>
              </div> 

              <div className="col-3">
                <a href="https://twitter.com/DrippyElephants">
                  <img src="https://iiw.kuleuven.be/images/logos/social-media/twitter-logo-blue.png/image" alt="twitter logo" className="img-fluid rounded w-50" />
                </a>
              </div> 
            </div>
          </div>    
      </div>
    </div>
  );
}

export default App;
