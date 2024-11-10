import React from 'react';
import { AiOutlineCheckSquare } from "react-icons/ai";
import './Skills.css';

const Skill = () => {
  return (
    <div id="skills">
      <section className="skill-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="skill-list">
            {/* Skill 1 */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-header">
                  <div className="icon-container">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="skill-title">HTML</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '100%' }}></div>
                  </div>
                  <p className="skill-percentage">100%</p>
                </div>
              </div>
            </div>
            {/* Skill 2 */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-header">
                  <div className="icon-container">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="skill-title">CSS</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '95%' }}></div>
                  </div>
                  <p className="skill-percentage">95%</p>
                </div>
              </div>
            </div>
           
            {/* Repeat as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
