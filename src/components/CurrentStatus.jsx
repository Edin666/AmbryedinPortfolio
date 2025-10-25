import React from "react";
import useScrollReveal from "../Hooks/useScrollReveal";

const CurrentStatus = () => {
  useScrollReveal(".current-status", { origin: "left" });
    return (
        <section className="section" id="currently">
            <div className="top-header">
                <h1>My Journey</h1>
            </div>

            <div className="project-container">
                <div className="project-box">
                    <i className="uil uil-book-alt"></i>
                    <h3>Completed</h3>
                    <label><b>MCA</b></label>
                </div>

                <div className="project-box">
                    <i className="uil uil-users-alt"></i>
                    <h3>Work Experience</h3>
                    <label><b>NewWay Solution LLC</b></label>
                    <label>(Internship)</label>
                </div>

                <div className="project-box">
                    <i className="uil uil-award"></i>
                    <h3>Experience</h3>
                    <label><b>Fresher</b></label>
                </div>
            </div>
        </section>
    );
};

export default CurrentStatus;