import React, { useState } from "react";

export default function Reset() {
    const [email, setEmail] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        // const {email}= req.body
        console.log(email);
        fetch("https://forgot-pwd-loginapp.onrender.com/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
            });
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2> Forgot Password</h2>
            <div className="mb-3">
                <label> Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail({ email: e.target.value })}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            <p className="forgot-password text-right">
                <a href="/sign-up"> Sign Up</a>
            </p>
        </form>
    );
}
