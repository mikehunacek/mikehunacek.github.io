import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-content">
          <h1>Mike Hunacek</h1>
          <p>Software Developer | Scrum Master</p>
          <p>Building Software That Lasts | Enabling Teams to Succeed</p>
          <button className="cta-button">Contact Me</button>
        </div>
      </header>
      <section className="about">
        <h2>About</h2>
        <p>
          As both a Software Engineer and Scrum Master, I combine technical expertise with agile leadership. 
          I specialize in .NET, C#, SQL, and JavaScript (React). I have hands-on experience with DevOps practices, 
          including Azure DevOps CI/CD pipelines and GitHub CI/CD workflows, as well as full-stack development. 
          In my Scrum Master role, I facilitate agile ceremonies, run team health checks, and help the development 
          team continuously improve how they work and deliver. My focus is on building software that lasts, improving 
          processes, and enabling teams to succeed together.
        </p>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Software Engineer</strong> - Pacific Northwest National Laboratory (PNNL) <br />
            <em>Feb 2008 - Present | Richland, WA</em>
          </li>
          <li>
            <strong>System and Network Manager</strong> - NV5 | Dade Moeller <br />
            <em>Jun 2003 - Feb 2008 | Richland, WA</em>
          </li>
          <li>
            <strong>Tech Specialist II</strong> - Energy Northwest <br />
            <em>Mar 2003 - Jun 2003 | Richland, WA</em>
          </li>
          <li>
            <strong>Software Developer (Working Visitor Missionary)</strong> - HCJB Global <br />
            <em>Sep 2002 - Dec 2002 | Elkhart, IN</em>
          </li>
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Bachelor of Science - BS, Computer Science</strong> - Seattle Pacific University <br />
            <em>1999 - 2002</em>
          </li>
          <li>
            <strong>Computer Science</strong> - Northwest Nazarene University <br />
            <em>1998 - 1999</em>
          </li>
        </ul>
      </section>
      <section className="certifications">
        <h2>Licenses & Certifications</h2>
        <ul>
          <li>
            <strong>Certified ScrumMaster (CSM)</strong> - Scrum Alliance <br />
            <em>Issued Jun 2023 | Expires Jun 2027 | Credential ID: 1799542</em>
          </li>
        </ul>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <p>
          C#, JavaScript, SQL, API Development, ScrumMaster, Agile Development, Code Review, Databases, .NET Core, 
          Front-end Development, ASP.NET, ASP.NET Core, Microsoft SQL Server, Git, GitHub, Programming, Microsoft Graph, 
          React.js, Redux.js, Visual Studio, Jira, Azure DevOps, HTML, CSS, Back-End Web Development, CI/CD, Full-Stack 
          Development, Splunk, Software Engineering Practices.
        </p>
      </section>
      <section className="professional-skills">
        <h2>Professional Skills & Programming Languages</h2>
        <ul>
          <li>
            <span>C#</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </li>
          <li>
            <span>JavaScript</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </li>
          <li>
            <span>SQL</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </li>
          <li>
            <span>React.js</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </li>
          <li>
            <span>Azure DevOps</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
