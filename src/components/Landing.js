import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button
                onClick={() => {
                    navigate("/signup");
                }}
                style={{
                    padding: ".5rem",
                    margin: "1rem",
                    borderRadius: "5px",
                    backgroundColor: "#1a73e8",
                    color: "#fff",
                    border: "none",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                }}
            >
                Sign Up | Login
            </button>
        </div>
    );
};

export default Landing;