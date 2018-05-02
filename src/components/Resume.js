import React from 'react';

const Resume = () => (
  <div>
  <h2>RESUME</h2>


  <h3>Julien Tregoat</h3>

  <p><a href="tel:9176787744">917-678-7744</a> | <a href="mailto:jules@jules.nyc">jules@jules.nyc</a> | <a href="http://www.github.com/julientregoat">github: julientregoat</a> | <a href="http://www.medium.com/@julientregoat">medium: @julientregoat</a></p>

  <p>Full stack web developer with experience in JavaScript (Node.JS/ React), Ethereum development, Ruby on Rails, and a background in hospitality and music. I discovered my love for computers at an early age writing simple bash scripts, growing into a passion for innovative technology. I bring strong skills in adaptability, communication, and efficiency that help companies trying to find solutions through pushing technology to its limits. My diverse experience ranges from being invited to DJ at Burning Man and organizing logistics for 400+ person events to IT consulting and freelance development.</p>

  <h3>TECHNICAL PROJECTS</h3>

  <h4>resound - <a href="https://github.com/julientregoat/resound">github link</a> | <a href="https://youtu.be/R5W3V2vq0eY">video demo</a></h4>
  <p>A decentralized music marketplace for independent artists and labels</p>
  <ul>
    <li>Deployed Solidity smart contracts to the Ethereum blockchain to handle all transactions and primitive data.</li>
    <li>Utilized the IPFS protocol to handle blob storage through a decentralized p2p network</li>
    <li>Implemented a custom decentralized serverless architecture for the backend with IPFS and the Ethereum blockchain.</li>
    <li>Integrated web3, Truffle, and MetaMask with a React/Redux front end to communicate with the blockchain seamlessly.</li>
  </ul>

  <h4>recordplayer.fm - <a href="https://github.com/julientregoat/recordplayer.fm">github link</a> | <a href="https://youtu.be/X8TWHYPh4ec">video demo</a></h4>
  <p>A music player that enables record collectors to access and listen to their collection online</p>
  <ul>
    <li>Used OAuth with the Discogs API for user authentication via an external application</li>
    <li>Parsed the 8m+record Discogs database into a viewable music library similar to iTunes or Spotify.</li>
    <li>Built on a Node.JS API with Sequelize, Postgres, and Express.js, employing a MVC architecture with a React front end</li>
  </ul>

  <h4>GYMFACE - <a href="https://github.com/julientregoat/gymface">github link</a> | <a href="https://youtu.be/vuB28MJ8LvA">video demo</a></h4>
  <p>A lifestyle management app with facial recognition authentication that doubles as a solution for gyms</p>
  <ul>
    <li>Used AWS Rekogonition and S3 to manage user faces and enable facial recognition login</li>
    <li>Designed a React and Semantic UI front end and Rails API / Postgres backend.</li>
    <li>Scraped the Equinox website for JavaScript-rendered content with Nokogiri, Watir, and Selenium</li>
  </ul>

  <h3>TECHNICAL SKILLS</h3>

  <p>Javascript, Node.js, React/Redux, Solidity / Ethereum, Blockchain, IPFS, Go, Ruby, Rails, tracking.js, OAuth, Sinatra, Selenium / Watir, SQL, AWS S3 / Rekognition, Linux / Ubuntu, Docker, Travis-CI, Nginx, Git, Google Visualization,,HTML, CSS, Bootstrap, Semantic UI, Ant Design</p>

  <h3>EMPLOYMENT HISTORY</h3>

  <h5>Freelance Full Stack Web & Ethereum Developer, ​ New York, NY</h5>
  <ul>
    <li>Developed a Node.js microservice to interact with the Ethereum blockchain and maintain data integrity</li>
    <li>Developed a React single page application to update an existing brand’s website</li>
    <li>Built and deployed Ethereum smart contracts using Solidity, as well as testing with Truffle</li>
    <li>Effectively worked with teams spread across the world while independently developing during sprints</li>
  </ul>

  <h5>BKW by Brooklyn Winery, ​New York, NY</h5>
  <p>Assistant General Manager, ​Jan. 2017 - Nov. 2017</p>
  <ul>
    <li>Oversaw the restaurant through the service and handled financials nightly</li>
    <li>Increased overall company sales by helping close wedding contracts for the Brooklyn Winery event space</li>
    <li>Helped create a network of regulars through building relationships with guests to increase our neighborhood presence</li>
    <li>Worked with staff to refine steps of service and provide a better experience for guests</li>
  </ul>


  <h5>New York Executive Concierge, New York, NY</h5>
  <p>Hospitality Consultant, Oct. 2015 - Aug. 2016</p>
  <ul>
    <li>Implemented a local network and cloud service to streamline document sharing and collaboration around the company</li>
    <li>Managed multiple essential relationships, including hotels, restaurants, and other important clients.</li>
    <li>Learned Quickbooks and helped implement a system for expense tracking and daily, weekly, and monthly sales</li>
  </ul>

  <h3>EDUCATION</h3>
  <h5>Flatiron School - New York, NY - 2018</h5>
  <ul><li>Full Stack Web Development, Ruby on Rails and Javascript program </li></ul>

  <h5>Concordia University - Montreal, QC, Canada - 2012 - 2013</h5>
  <ul><li>Coursework towards B.S. Degree in Computer Science</li></ul>
  </div>
);

export default Resume;
