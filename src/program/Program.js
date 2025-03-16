import '../index.css';
import './Program.css';
import Xarrow from "react-xarrows";
import React, { useState, useEffect } from "react";

const Program = () => {
    const [sideChange, setSideChange] = useState(document.documentElement.clientWidth < 515);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const side = document.documentElement.clientWidth < 515;
            if (side !== sideChange) setSideChange(side);
        }, false);
    }, [sideChange]);
    
    const [lineChange, setLineChange] = useState(document.documentElement.clientWidth < 530);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const line = document.documentElement.clientWidth < 530;
            if (line !== lineChange) setLineChange(line);
        }, false);
    }, [lineChange]);
    
    return (
        <section className="card program-section middle-section" id="program-section">
            <h1 className="title">Program</h1>
            <div className="program-body">
                <div className="schedule-item left-side">
                    <div className="time" id="first-time">15:00</div>
                    <div className="event">—</div>
                    <div className="event" id="first-desc">
                        <p className="text">Сбор гостей</p>
                    </div>
                </div>       
                <div className={`schedule-item ${sideChange ? "left-side" : "right-side"}`}>
                    <div className="time" id="second-time">15:30</div>
                    <div className="event">—</div>
                    <div className="event" id="second-desc">
                        <p className="text">Церемония бракосочетания</p>
                    </div>
                </div>
                <div className="schedule-item left-side">
                    <div className="time" id="third-time">16:30</div>
                    <div className="event">—</div>
                    <div className="event" id="third-desc">
                        <p className="text">Свадебный банкет</p>
                    </div>
                </div>
                <Xarrow
                    start="first-desc"
                    end={`${lineChange ? "second-time" : "second-desc"}`}
                    color="white"
                    showHead={false}
                    animateDrawing={true}
                    strokeWidth={1}
                    endAnchor="top"
                    startAnchor={`${lineChange ? "bottom" : "right"}`}
                />
                <Xarrow
                    start={`${lineChange ? "second-time" : "second-desc"}`}
                    end="third-desc"
                    color="white"
                    showHead={false}
                    animateDrawing={true}
                    strokeWidth={1}
                    endAnchor="top"
                    startAnchor="bottom"
                />
            </div>
        </section>
    );
};

export default Program;