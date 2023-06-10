import React from 'react';

const AboutPage = () => {
  return (
    <div className="search-result">
      <h2 className="search-result-title">Jonathan Pan 📍 San Francisco, CA</h2>
      <div className="search-result-link-container"></div>
      <div className="search-result-description-container">
        <img className="jpan-image" src="/jpan.png" alt="jpan-pic" />
        <p className="search-result-description">
          Not my dog unfortunately but he is very cute.
        </p>
        <ul className="bullet-list">
          <li>
            Introducing an exceptional individual, a blend of technical prowess
            and social charisma: Jonathan Pan. With a solid educational
            foundation, having been classically trained at UC Berkeley with
            degrees in Computer Science and Data Science, Jonathan stands at the
            forefront of cutting-edge technology.
            <br /><br />
            Professionally, Jonathan has honed their skills in cloud applications
            during their tenure at Salesforce, specifically working on the
            Einstein platform. There, they contributed significantly to the
            development of backend systems for AI tools and supported in-house
            data scientists, helping shape the landscape of artificial
            intelligence. 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
