import React, { useState } from "react";
import "./BmiCalculator.css";

function BmiCalculator() {
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const calculateBmi = (e) => {
        e.preventDefault();
        if (weight && height) {
            let bmi = (weight / ((height / 100) ** 2)).toFixed(1);
            setBmi(`Your BMI is: ${bmi}`);

            
            if (bmi < 18.5) {
                setMessage("You are underweight");
            } else if (bmi >= 18.5 && bmi < 24.9) {
                setMessage("You are having a healthy weight");
            } else if (bmi >= 25 && bmi < 29.9) {
                setMessage("You are overweight");
            } else {
                setMessage("You are obese");
            }
        } else {
            setBmi('');
            setMessage('');
        }
    };

    return (
        <div className="bmi-calculator-container">
            <h2>BMI Calculator</h2>
            <form onSubmit={calculateBmi} className="bmi-calculator-form">
                <div className="form-inputs">
                    <label htmlFor="weight">Weight (in kg)</label>
                    <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="height">Height (in cm)</label>
                    <input
                        id="height"
                        type="number"
                        value={height}
                        onChange={handleHeightChange}
                    />
                </div>
                <div className="form-inputs">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="bmi-messages">
                <h4>{bmi}</h4>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default BmiCalculator;
