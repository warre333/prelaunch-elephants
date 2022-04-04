// Import styles
import '../styles/Header.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
  return (

    <div className="Header">

      <div className='navigating'>
        <div className='row'>
          <div className='col'>
          <AnchorLink href='#story'><h2 className='StoryText headerplacement text'>STORY</h2></AnchorLink>
          </div>
          <div className='col'>
            <AnchorLink href='#roadmap'><h2 className='RoadmapText headerplacement text'>ROADMAP</h2></AnchorLink>
          </div>
          <div className='col'>
            <AnchorLink href='#team'><h2 className='TeamText headerplacement text'>TEAM</h2></AnchorLink>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;