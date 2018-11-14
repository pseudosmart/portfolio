import React from 'react'
const SamThumbnail = require('../../assets/SamCanterburyOct2018.png')

const CVContainer = () => (
  <div className="cv">
    <div className="header">
      <div className="thumbnail">
        <figure>
          <img src={SamThumbnail} alt="Sam Smart" />
        </figure>
      </div>

      <div className="name">
        <h1>Sam Smart</h1>
        <h2>Software Engineer</h2>
      </div>

      <div id="contactDetails" className="contact">
        <ul className="list-unstyled">
          <li>e: <a href="mailto:joe@bloggs.com" target="_blank">sam.j.b.smart@gmail.com</a></li>
          <li>w: <a href="https://www.samsmart.me">www.samsmart.me</a></li>
        </ul>
      </div>
    </div>

    <div className="content">
      <section>
        <div className="section-title">
          <h1>Personal Profile</h1>
        </div>

        <div className="section-content">
          <p>
            I am an experienced Full Stack JavaScript Engineer with a proclivity for front-end development.
            I enjoy nothing more than getting my head down, solving problems and writing code.
            I am a massive advocate for owning development throughout the entire process, from conception, through to deploying and then maintaining.
          </p>
        </div>
      </section>


      <section>
        <div className="section-title">
          <h1>Work Experience</h1>
        </div>

        <div className="section-content">
          <h3>Full Stack JavaScript Engineer - Holiday Extras</h3>
          <p className="text-muted">August 2017 - Current</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>

          <h3>Web Developer, Placement Student - Holiday Extras</h3>
          <p className="text-muted">July 2015 - September 2016</p>
          <p>
            This was an excellent opportunity for me to grow and develop my limited JavaScript knowledge in a very safe but practical environment.
            Early on I was tasked with converting one of the company's monoliths from CoffeeScript to pure JavaScript as I was new to Javascript I used this as a teaching opportunity and to launch myself onto bigger and better tasks.
            After proving myself, I was rapidly treated as a full engineer and had to live up to the expectations and responsibilities that came with that.  
          </p>

          <h3>Peer Tutor (School Of Computing) - University of Kent</h3>
          <p className="text-muted">September 2014 - June 2015</p>
          <p>
            During my time in this role, I was expected to assist first-year students with any technical problems they were having.
            It developed my communication and coaching abilities alongside my problem-solving skills and showed me the importance of pitching at the correct technical level.
          </p>
        </div>
      </section>


      <section>
        <div className="section-title">
          <h1>Key Skills</h1>
        </div>

        <div className="section-content">
          <ul className="skills list-unstyled">
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Microservices</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS/LESS/SASS</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </section>


      <section>
        <div className="section-title">
          <h1>Education</h1>
        </div>

        <div className="section-content">
          <h3>University of Kent</h3>
          <p className="text-muted">September 2013 - June 2017</p>
          <p className="subDetails">First Class BSc (Hons) Computer Science with a Year in Industry</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>

          <h3>St Laurence Secondary School</h3>
          <p className="text-muted">September 2006 - July 2013</p>
          <ul className="list-unstyled">
            <li>3 A-Levels: Mathematics, Further Mathematics and Physics</li>
            <li>AS-Level: Chemistry</li>
            <li>12 GCSEs: Including English, Mathematics and Science </li>
          </ul>
        </div>
      </section>

    </div>
  </div>
)


export default CVContainer
