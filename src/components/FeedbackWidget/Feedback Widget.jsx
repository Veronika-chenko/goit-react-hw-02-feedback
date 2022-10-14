import { Component } from "react";
// import PropTypes from 'prop-types';

export class FeedbackWidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    render() {
        return (
            <>
                <section style={{marginBottom: "20px"}}>
                    <p style={{fontWeight: 700, marginBottom: "10px"}}>Please leave feedback</p>
                    <div>
                        <button>Good</button>
                        <button>Neutral</button>
                        <button>Bad</button>
                    </div>
                </section>
                <section>
                    <p style={{fontWeight: 700, marginBottom: "10px"}}>Statistics</p>
                    <ul>
                        <li>Good:</li>
                        <li>Neutral:</li>
                        <li>Bad:</li>
                    </ul>
                </section>
            </>
        )
    }
}
