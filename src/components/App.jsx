import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClick = (evt) => {
        const name = evt.target.name;
        this.setState((prevState) => ({
            [name]: prevState[name] + 1
        }));
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    countPositiveFeedbackPercentage() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        const positive = Math.round(good * 100 / total);
        return positive;
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const objKeys = Object.keys(this.state);
        const total = this.countTotalFeedback();
        const positive = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={objKeys} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    {total === 0
                        ? <Notification message="There is no feedback" />
                        : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />
                    }
                </Section>
            </>
        )
    }
};
