import './App.css';
import darkLogo from './images/logo-dark.svg';
import lightLogo from './images/logo-light.svg';
import heroImg from './images/image-hero-desktop.png';
import iconAnimation from './images/icon-animation.svg';
import iconDesign from './images/icon-design.svg';
import iconPhotography from './images/icon-photography.svg';
import iconCrypto from './images/icon-crypto.svg';
import iconBusiness from './images/icon-business.svg';


function App() {
  return (
    <div className="App">
        <div className='logo-section'>
          <img src={darkLogo} alt=""/>
          <button type="submit">Get Started</button>
        </div>

        <div className='header-section'>
          <div className='call-to-action'>
            <h1>Maximize skill, minimize budget</h1>
            <p>Our modern courses across a range of in-demand 
               skills will give you the knowledge you need to 
               live the life you want.</p>
            <button className='cta-btn' type="submit">Get Started</button>
          </div>
          <div className='heroImgCont'>
            <img  className='hero-image' src={heroImg} alt=""/>
          </div>
        </div>

        <div className='courses-grid'>
          <div className='firstRow'>
            <div className='popular-courses'>
              <h1>Check out our most popular courses!</h1>
            </div>
            <div className='animation'>
              <img src={iconAnimation} alt=""/>
              <h3>Animation</h3>
              <p>Learn the latest animation techniques 
                 to create stunning motion design and 
                 captivate your audience.</p>
              <button className='course-btn' type="submit"> Get Started</button>
            </div>
            <div className='design'>
              <img src={iconDesign} alt=""/>
              <h3>Design</h3>
              <p>Create beautiful, usable interfaces to help shape
                 the future of how the web looks.</p>
              <button className='course-btn' type="submit">Get Started</button>
            </div>
          </div>
          <div className='secondRow'>
            <div className='photography'>
              <img src={iconPhotography} alt=""/>
              <h3>Photography</h3>
              <p>Explore critical fundamentals like lighting, 
                 composition, and focus to capture exceptional 
                 photos.</p>
              <button className='course-btn' type="submit">Get Started</button>
            </div>
            <div className='crypto'>
              <img src={iconCrypto} alt=""/>
              <h3>Crypto</h3>
              <p>All you need to know to get started investing in crypto. 
                 Go from beginner to advanced with this 54 hour course.</p>
              <button className='course-btn' type="submit">Get Started</button>
            </div>
            <div className='business'>
              <img src={iconBusiness} alt=""/>
              <h3>Business</h3>
              <p>A step-by-step playbook to help you start, scale, and sustain 
                your business without outside investment.</p>
              <button className='course-btn' type="submit">Get Started</button>
            </div>
          </div>
        </div>

        <div className='footer'>
          <img src={lightLogo} alt='' />
          <button type='submit'>Get Started</button>
        </div>
    </div>
  );
}

export default App; 
