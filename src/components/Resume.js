import React from 'react';

const Resume = ({}) => (
  <div>
  <h2>RESUME</h2>


    <h3>Julien Tregoat</h3>

    <p>917-678-7744 | jules@jules.nyc | github: julientregoat | medium: @julientregoat  |  www.jules.nyc </p>

    <p>Full stack web developer with experience in Ruby on Rails, JavaScript, React, and Ethereum development, and a background in hospitality and music. I discovered my love for computers at an early age writing simple bash scripts, growing into a passion for innovative technology. I bring strong skills in adaptability, communication, and efficiency that help companies trying to find solutions through pushing technology to its limits. My diverse experience ranges from being invited to DJ at Burning Man and organizing logistics for 400+ person events to IT consulting and management.</p>


  <h3>TECHNICAL PROJECTS</h3>

  <h4>resound - <a href="https://github.com/julientregoat/resound">github link</a></h4>
  <p>A decentralized music marketplace for independent artists and labels</p>
  <ul>
  <li>Deployed Solidity smart contracts to the Ethereum blockchain to handle all transactions and primitive data.</li>
  <li>Utilized the IPFS protocol to handle blob storage through a decentralized p2p network</li>
  <li>Implemented a custom decentralized serverless architecture for the backend with IPFS and the Ethereum blockchain.</li>
  <li>Integrated web3, Truffle, and MetaMask with a React/Redux front end to communicate with the blockchain seamlessly.</li>
  </ul>

  <h4>recordplayer.fm - <a href="https://github.com/julientregoat/recordplayer.fm">github link</a></h4>
  <p>A music player that enables record collectors to access and listen to their collection online</p>
  <ul>
  <li>Used OAuth with the Discogs API for user authentication via an external application</li>
  <li>Parsed the 8m+record Discogs database into a viewable music library similar to iTunes or Spotify.</li>
  <li>Built on a Node.JS API with Sequelize, Postgres, and Express.js, employing a MVC architecture with a React front end</li>
  </ul>

  <h4>GYMFACE - <a href="https://github.com/julientregoat/gymface">github link</a></h4>
  <p>A lifestyle management app with facial recognition authentication that doubles as a solution for gyms</p>
  <ul>
  <li>Used AWS Rekogonition and S3 to manage user faces and enable facial recognition login</li>
  <li>Designed a React and Semantic UI front end and Rails API / Postgres backend.</li>
  <li>Scraped the Equinox website for JavaScript-rendered content with Nokogiri, Watir, and Selenium</li>
  </ul>

  <h3>TECHNICAL SKILLS</h3>

  <p>Javascript, Node.js, React/Redux, jQuery, tracking.js, OAuth, Solidity / Ethereum, IPFS, Ruby, Rails, Sinatra, Selenium / Watir, SQL, AWS S3 / Rekognition, Google Visualization, Git, HTML, CSS, Bootstrap, Semantic UI, Ant Design</p>

  <h3>EMPLOYMENT HISTORY</h3>

  <h5>BKW by Brooklyn Winery, New York, NY</h5>
  <p>Assistant General Manager, Jan. 2017 - Nov. 2017</p>
  <ul>
  <li>Oversaw the restaurant through the service and handled financials nightly</li>
  <li>Helped create a network of regulars through building relationships with guests to increase our neighborhood presence.</li>
  <li>Increased overall company sales by helping close wedding contracts for the Brooklyn Winery event space.</li>
  <li>Worked with staff to refine steps of service and provide a better experience for guests</li>
  </ul>

  <h5>New York Executive Concierge, New York, NY</h5>
  <p>Hospitality Consultant, Oct. 2015 - Aug. 2016</p>
  <ul>
  <li>Implemented a local network and cloud service to streamline document sharing and collaboration around the company</li>
  <li>Managed multiple essential relationships, including hotels, restaurants, and other important clients.</li>
  <li>Learned Quickbooks and helped implement a system for expense tracking and daily, weekly, and monthly sales</li>
  </ul>

  <h5>halcyon the shop, New York, NY</h5>
  <p>Buyer, Keyholder, May 2014 - Oct. 2015</p>
  <ul>
  <li>Increased sales significantly by building relationships with customers, understanding their needs, and delivering</li>
  <li>Oversaw daily operations of the store, including opening and closing, nightly financials and inventory management</li>
  <li>Helped expand international b2b distributions sales through consistent contact and setting up events with partners</li>
  </ul>

  <h3>EDUCATION</h3>
  <h5>Flatiron School - New York, NY - 2018</h5>
  <ul><li>Full Stack Web Development, Ruby on Rails and Javascript program </li></ul>

  <h5>Concordia University - Montreal, QC, Canada - 2012 - 2013</h5>
  <ul><li>Coursework towards B.S. Degree in Computer Science</li></ul>
  </div>
);

export default Resume;
