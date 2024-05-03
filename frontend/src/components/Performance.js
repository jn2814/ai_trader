import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import './App.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect } from "react";
import * as d3 from "d3";
import { createContext, useContext, useState } from 'react';
import Button from './Button';

const Performance = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.state);
    
    return (
       <div className="App">
            <header className="App-header">
                <h1>Performance Overview</h1>
            </header>
        </div>
    );
};

export default Performance;