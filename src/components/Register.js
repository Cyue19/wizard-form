import React, { Component } from 'react';
import AccountInfo from './AccountInfo';
import PersonalInfo from "./PersonalInfo";

import StepProgressBar from "./StepProgressBar";

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }
    }

    getStep() {
        const {step} = this.state;

        switch(step) {
            case 1: 
                return(<AccountInfo/>);
            case 2:
                return(<PersonalInfo/>)
            default:
                break;
        }
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1
        });
    }

    prevStep() {
        this.setState({
            step: this.state.step - 1
        });
    }

    render() {
        return (
            <div className="container mt-5 py-3" style={{borderRadius: "25px", backgroundColor: "white"}}>
                <div className="background" style={{left: "0px", top: "0px"}}></div>

                <h1 className="text-center">Create your account</h1>
                <p className="text-center">Fill in all fields to continue</p>
                
                <StepProgressBar />

                <div className="form-card my-3">
                    {this.getStep()}
                </div>
                <button onClick={() => this.nextStep()} className="btn btn-primary" type="button">Next</button>
            </div>
        )
    }
}
