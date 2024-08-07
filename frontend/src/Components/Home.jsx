import React, { useEffect } from 'react';
import './Home.css';
import 'boxicons';
import ScrollReveal from 'scrollreveal';

const App = () => {
    useEffect(() => {
        const header = document.querySelector("header");
    
        const handleScroll = () => {
          header.classList.toggle("sticky", window.scrollY > 0);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        const menu = document.querySelector('#menu-icon');
        const navlist = document.querySelector('.navlist');
    
        menu.onclick = () => {
          menu.classList.toggle('bx-x');
          navlist.classList.toggle('active');
        };
    
        window.onscroll = () => {
          menu.classList.remove('bx-x');
          navlist.classList.remove('active');
        };
    
        const sr = ScrollReveal({
          distance: '45px',
          duration: 2700,
          reset: true,
        });
    
        sr.reveal('.home-text', { delay: 350, origin: 'left' });
        sr.reveal('.home-img', { delay: 350, origin: 'right' });
        sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact', { delay: 200, origin: 'bottom' });
    
        // Cleanup function to remove event listeners on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div>
      <header>
        <a href="#home" className="logo"><img src="/Img/T-removebg-preview.png" alt="Logo" /></a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navlist">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/Resume/Simmi.pdf" className="top-btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h3>Hello, I'm</h3>
          <h1>Simmi Thapad</h1>
          <h5>A student <span>From IGDTUW</span></h5>
          <p>I'm a web developer, and I'm very passionate <br /> and dedicated to my work.</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/simmi-thapad-5692511a9/" target="_blank" rel="noopener noreferrer">
              <box-icon name='linkedin' type='logo' ></box-icon>
            </a>
            <a href="https://github.com/simmithapad" target="_blank" rel="noopener noreferrer">
              <box-icon name='github' type='logo' ></box-icon>
            </a>
            <a href="https://www.instagram.com/simmithapad/" target="_blank" rel="noopener noreferrer">
              <box-icon name='instagram' type='logo' ></box-icon>
            </a>
            <a href="https://twitter.com/simmi_thapad" target="_blank" rel="noopener noreferrer">
              <box-icon name='twitter' type='logo' ></box-icon>
            </a>
          </div>
          <a href="#about" className="btn">About Me</a>
        </div>

        <div className="home-img">
          <img src="/Img/Me.png" alt="Me" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="/Img/Me.png" alt="About" />
        </div>

        <div className="about-text">
          <h3>About</h3>
          <h2>Indira Gandhi Delhi Technical University For Women</h2>
          <h4>Computer Science and Engineering</h4>
          <h5>2021-2025</h5>
          <br />
          <p>Hi, I am a Fresher pursuing Computer Science at IGDTUW. I'm a quick learner with great managerial skills and technology excites me a lot. I'm a professional and trained singer, guitarist, photographer & videographer, and video & audio editor. Besides, I have a deep interest in cybersecurity.</p>
        </div>
      </section>

      <section className="portfolio" id="skills">
        <div className="heading">
          <h3>Skills</h3>
          <h2>The Skills I acquire</h2>
        </div>

        <div className="portfolio-content">
          {['html', 'css', 'js', 'mongodb', 'java', 'mysql', 'bootstrap'].map(skill => (
            <div className="col" key={skill}>
              <img src={`/Img/${skill}.png`} alt={skill.toUpperCase()} />
              <div className="layer">
                <h4>{skill.toUpperCase()}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="service" id="projects">
        <div className="heading">
          <h3>Projects</h3>
          <h2>Works I have done</h2>
        </div>

        <div className="service-content">
          {[
            { id: 'portfolio', title: 'Portfolio Website', desc: 'I made this portfolio website for my friend using HTML, CSS, and Bootstrap', img: 'portfolio.png' },
            { id: 'bot', title: 'Chatbot', desc: 'I made a chatbot on telegram with my team members', img: 'bot.png' },
            { id: 'T', title: 'My Portfolio', desc: 'This is my portfolio website', img: 'T.png' },
            { id: 'health', title: 'Health Website', desc: 'I and my teammates made this website on the platform "Velo by Wix" for a hackathon.', img: 'health.png', link: 'https://simmi031btcse21.wixsite.com/my-site' },
          ].map(project => (
            <div className="row" key={project.id}>
              <a href={project.link || '#'}>
                <div className={`s s-${project.id}`}>
                  <img src={`Img/${project.img}`} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="center">
            <h3>Let's talk</h3>
            <p>Get in touch via emailing me <a href="mailto:simmithapad23@gmail.com">simmithapad</a></p>
          </div>

          <div className="action">
            <form>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" required />
              <input type="email" name="email" placeholder="Enter Your email" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <input type="submit" name="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>

      <div className="ends">
        <p>Simmi Thapad © 2024</p>
      </div>

      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      {/* <script type="text/javascript" src="js/script.js"></script> */}
    </div>
  );
}

export default App;