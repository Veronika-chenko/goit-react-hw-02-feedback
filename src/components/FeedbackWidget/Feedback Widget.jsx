import React, { Component } from "react";
// import PropTypes from 'prop-types';

export class FeedbackWidget extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = (evt) => {
        console.log(1)
        const btnName = evt.target.name;
        this.setState((prevState) => ({
            [btnName]: prevState[btnName] + 1
        }))
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const objKeys = Object.keys(this.state);

        return (
            <>
                <section style={{marginBottom: "20px"}}>
                    <p style={{ fontWeight: 700, marginBottom: "10px" }}>Please leave feedback</p>
                    
                    {objKeys.map(key => {
                        return <button key={key} type="button" name={key} onClick={this.handleClick}>{key}</button>
                    })}

                </section>
                <section>
                    <p style={{fontWeight: 700, marginBottom: "10px"}}>Statistics</p>
                    <ul>
                        <li>Good:{good}</li>
                        <li>Neutral:{neutral}</li>
                        <li>Bad:{bad}</li>
                    </ul>
                </section>
            </>
        )
    }
}
