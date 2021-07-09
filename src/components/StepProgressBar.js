import React, { Component } from 'react';

export default class StepProgressBar extends Component {

    render() {
        const step = this.props.step;
        console.log((step>=2) ? "red" : "lightgray");
        return (
            <div className="row step-bar-container">
                <div className="step-bar text-center mb-2">
                    <div>
                        <div style={{color: "#87CEEB"}} className="step-circle">1</div>
                        <label>Step 1</label>
                    </div>
                    <div>
                        <div style={{color: (step>=2) ? "#87CEEB" : "lightgray"}} className="step-circle">2</div>
                        <label>Step 2</label>
                    </div>
                    <div>
                        <div style={{color: (step>=3) ? "#87CEEB" : "lightgray"}} className="step-circle">3</div>
                        <label>Step 3</label>
                    </div>
                    <div>
                        <div style={{color: (step>=4) ? "#87CEEB" : "lightgray"}} className="step-circle">4</div>
                        <label>Step 4</label>
                    </div>
                    <div>
                        <div style={{color: (step>=5) ? "#87CEEB" : "lightgray"}} className="step-circle">5</div>
                        <label>Step 5</label>
                    </div>
                    <div>
                        <div style={{color: (step>=6) ? "#87CEEB" : "lightgray"}} className="step-circle">6</div>
                        <label>Step 6</label>
                    </div>
                </div>

                <div style={{backgroundImage: this.props.gradient}} className="step-bar-line"></div>
            </div>
        )
    }
}
