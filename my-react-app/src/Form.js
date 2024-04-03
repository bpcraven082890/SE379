import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        if (numbers.includes(event.target.value)) {
            setErrorMessage('Please enter a valid first name');
            //setIsVisible(true);
        }
        else {
            setFirstName(event.target.value);
            setErrorMessage('');
            //setIsVisible(false);
        }
    }
    const handleLastNameChange = (event) => {
        if (numbers.includes(event.target.value)) {
            setErrorMessage('Please enter a valid last name');
            //setIsVisible(true);
        }
        else {
            setLastName(event.target.value);
            setErrorMessage('');
            //setIsVisible(false);
        }
    }
    const validateForm = () => {
        if (!firstName || !lastName || !email) {
            setErrorMessage('Please fill in all fields');
            //setIsVisible(true);
        } else if (!email.includes('@')) {
            setErrorMessage('Please enter a valid email address');
            //setIsVisible(true);
        }else {
            clearForm();
            alert('Successfully Submitted Form');
            //setIsVisible(false);
        }
    }
    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setErrorMessage("");
    }
    const displayForm = () => {
        setIsVisible(true);
    }

    return (
        <>
        <button onClick={displayForm}hidden={isVisible}>Sign Up</button>
        <form hidden={!isVisible}>
            <label className="form-label">First Name</label>
            <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <label className="form-label">Last Name</label>
            <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <label className="form-label">Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <button onClick={validateForm}type="submit">Submit</button>
            <button onClick={clearForm} type="button">Clear</button>
        </form>
        <span>{errorMessage}</span>
        </>
    );
};

export default Form;