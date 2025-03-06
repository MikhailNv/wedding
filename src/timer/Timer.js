import '../index.css';
import './Timer.css';
import Countdown from 'react-countdown';
import React from "react";

const ParseDate = ({days, hours, minutes, seconds}) => {
    const parse_names = (names, date_value) => {
        date_value = date_value.toString()
        if (date_value.length > 2) {
            date_value = date_value.substring(date_value.length - 2, date_value.length)
        }

        if (parseInt(date_value) >= 11 && parseInt(date_value) <= 20) {
            return names["last_form"];
        }
        else {
            const last_num = parseInt(date_value.slice(-1));
            if (last_num === 1) { return names["first_form"]; }
            if (last_num > 1 && last_num < 5) { return names["middle_form"]; }
            else { return names["last_form"]; }
        }
    }

    const day_names = {
        "first_form": "день",
        "middle_form": "дня",
        "last_form": "дней"
    };
    const hour_names = {
        "first_form": "час",
        "middle_form": "часа",
        "last_form": "часов"
    };
    const minute_names = {
        "first_form": "минута",
        "middle_form": "минуты",
        "last_form": "минут"
    };
    const second_names = {
        "first_form": "секунда",
        "middle_form": "секунды",
        "last_form": "секунд"
    };

    return(
        <div className="timer-body" id="timer">
            <div className="timer-value-container">
                <div className="time">{days}</div>
                <div className="time-desc">{parse_names(day_names, days)}</div>
            </div>
            <div className="delimeter">:</div>
            <div className="timer-value-container">
                <div className="time">{hours}</div>
                <div className="time-desc">{parse_names(hour_names, hours)}</div>
            </div>
            <div className="delimeter">:</div>
            <div className="timer-value-container">
                <div className="time">{minutes}</div>
                <div className="time-desc">{parse_names(minute_names, minutes)}</div>
            </div>
            <div className="delimeter">:</div>
            <div className="timer-value-container">
                <div className="time">{seconds}</div>
                <div className="time-desc">{parse_names(second_names, seconds)}</div>
            </div>
        </div>
    )
}

const Timer = () => {
    return (
        <section className="card timer-section last-section">
            <h1 className="title">Time left</h1>
            <Countdown
            date={'2025-07-29T00:00:00'} 
            renderer={
                props => <ParseDate days={props.days} hours={props.hours} minutes={props.minutes} seconds={props.seconds}/>
            }/>
        </section>
    );
};

export default Timer;