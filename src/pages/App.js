import '../styles/App.css';
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

import Header from '../components/Header';
import IntroVideo from "../images/IntroductionVideo.mp4";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 750 })
  }, [])
  return (
    <div className="App">
      <Header />

      <div className="About">
        <img src="https://media.discordapp.net/attachments/938106030351609897/959449288528773190/Untitled.jpg?width=720&height=405" className="AboutImage" />
      </div>

      <div id="story" />
 

        {/*<video controls autoPlay loop muted src={Gif} type="video/mp4"></video>*/}

      <div className="IntroVideoWrapper row" data-aos="fade-up" >
        <div className="col-md-5 col-12" data-aos="fade-up">
          <video controls autoPlay loop muted src={IntroVideo} className="IntroVideo"/>
        </div>
        <div className="col" data-aos="fade-up" id="" style={{marginTop: "10vh"}}>
          {/*backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: "url('https://media.discordapp.net/attachments/938106030351609897/964093034843222046/a98b788c-b883-44fa-b1fe-2e87406c8630.sketchpad_1.png?width=720&height=360'",*/}
          <div className="" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5vw 2vw 5vw 2vw", marginRight: "1vw", marginLeft: "1vw", borderRadius: "10px"}}>
            <h2 className="Title text-md-start text-center color-white" style={{color: "var(--white)", fontFamily: 'Patrick Hand'}} >Drippy Elephants Spotted!</h2>
            <h3 className="Text text-md-start text-center  color-white" style={{fontFamily: 'Patrick Hand'}}>5555 unique newborn elephants fighting world extinction.</h3>
            <h3 className="Text text-md-start text-center  color-white" style={{fontFamily: 'Patrick Hand'}}>Our community will benefit from our utility and gain access to our next collection the Zookeepers. join us for exclusive events.</h3>
            <h3 className="Text text-md-start text-center  color-white" style={{fontFamily: 'Patrick Hand'}}>A zoo awaits us in the metaverse!</h3>
          </div>
        </div>
      </div>


      <div id="roadmap" />
      <div className="Roadmap row" data-aos="fade-up" style={{marginTop: "15vh"}}>
        <div className="col-12 col-lg-6"><img src="https://media.discordapp.net/attachments/938106030351609897/959473987673526363/IMG_2048.jpg?width=720&height=405" className="shadow-lg RoadmapImage w-100" /></div>
        <div className="col-12 col-lg-6"><img src="https://media.discordapp.net/attachments/938106030351609897/959473988038451220/IMG_2061.jpg?width=720&height=405" className="shadow-lg RoadmapImage w-100" /></div>
        
        
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
              <p className="TeamMemberRole normalfont">Co-founder & Digital marketer</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502159936471060/unknown.png?width=398&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Senne Hubner</h4>
              <p className="TeamMemberRole normalfont">Co-founder & blockchain-expert</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502160959893505/unknown.png?width=667&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Roy Kurilla</h4>
              <p className="TeamMemberRole normalfont">Community manager & investor</p>
            </div>  
          </div>
          <div className="col-lg-3" />
        
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/962378999403806831/unknown.png" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">David Tomeček</h4>
              <p className="TeamMemberRole normalfont">Investor & team support</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502160204910612/unknown.png?width=279&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Elias Triekels</h4>
              <p className="TeamMemberRole normalfont">Investor & team support</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502160670470224/unknown.png?width=506&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Arhan Okuyan</h4>
              <p className="TeamMemberRole normalfont">Investor & team support </p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/962989754083835914/onbekend.jpeg?width=676&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Warre Bossaert</h4>
              <p className="TeamMemberRole normalfont">Web 3 developer</p>
            </div>  
          </div>
          <div className="col-lg-2 col-4">
            <div className="TeamMember">
              <img src="https://media.discordapp.net/attachments/938106030351609897/960502161391910933/unknown.png?width=676&height=676" className="TeamMemberImage" />
              <h4 className="TeamMemberName normalfont">Ruben Marques</h4>
              <p className="TeamMemberRole normalfont">Investor & team support</p>
            </div>  
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center Title" data-aos="fade-up" style={{marginTop: "5vh", marginBottom: "2vh"}}>Rare Collectibles</h2>
        
        <div className="row row-cols-md-6 row-cols-3 gy-2" data-aos="fade-up" style={{marginBottom: "10vh"}}>
          <div className="col">
            <img src="https://media.discordapp.net/attachments/938106030351609897/959451739403214858/elephant_hoodie_2.jpg?width=676&height=676" alt="rarecollectibe" className="rarecollectibe img-fluid rounded"  />
          </div>

          <div className="col">
            <img src="https://media.discordapp.net/attachments/938106030351609897/959451740095283240/Elephant_NFT.jpg?width=676&height=676" alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src="https://media.discordapp.net/attachments/938106030351609897/959451740577611846/elephant.jpg?width=676&height=676" alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src="https://media.discordapp.net/attachments/938106030351609897/964600106596843610/elephant_1.png?width=676&height=676" alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src="https://media.discordapp.net/attachments/938106030351609897/959457286999384174/Ontwerp_zonder_titel.jpg" alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
          </div>

          <div className="col">
            <img src="https://media.discordapp.net/attachments/938106030351609897/959457286999384174/Ontwerp_zonder_titel.jpg" alt="rarecollectibe" className="rarecollectibe img-fluid rounded" />
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
