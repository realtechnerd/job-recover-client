import React from 'react';
import {Link} from "react-router-dom";
import img from "../img/404.png";
import Header from '../components/Header';

function ErrorPage() {
    return (
        <> {/* I just out sritaned the motati */}
            <Header />
            <div className="container errorpage">
                <div style={{marginTop:145}}>
                    <img src={img}/>
                    <h1>404! Page not found.</h1>
                    <p>I'm pretty sure this is Advaith's fault.</p>
                    <Link className="lit-btn" to="/">Back to Home</Link>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
