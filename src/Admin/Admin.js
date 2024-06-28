import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Admin.css';
import AddCloth from "./AddCloth";

const Admin = () => {
    const [selectedButton, setSelectedButton] = useState("button1");
    const location = useLocation();
    const navigate = useNavigate();
    const condition = location.state || {};

    const validate = () => {
        if (condition !== "Pass") {
            navigate(`/adminlogin`);
        }
    };

    useEffect(() => {
        validate();
    }, [condition]);

    const handleLogout = () => {
        navigate(`/adminlogin`);
    };

    const renderComponent = () => {
        switch (selectedButton) {
            case "button1":
                return <AddCloth />;
            default:
                return null;
        }
    };

    return (
        <section className="admin-main">
            <div className="admin-container">
                <div className="admin-header">
                    <div className="admin-buttons">
                        <button
                            onClick={() => setSelectedButton("button1")}
                            style={{
                                backgroundColor: selectedButton === "button1" ? "#ff6a00" : "inherit",
                            }}
                        >
                            Add Clothe
                        </button>
                        <div className="admin-logout">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                    {/* <div className="admin-logout">
                        <button onClick={handleLogout}>Logout</button>
                    </div> */}
                </div>
                <div className="admin-content">
                    {renderComponent()}
                </div>
            </div>
        </section>
    );
};

export default Admin;
