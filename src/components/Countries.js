import React, { useEffect } from 'react';
import axios from "axios";

const Countries = () => {

    // Le useEffect se joue lorsque le composant est monté ( [] = Callback )
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => console.log(res.data));
    }, []);

    return (
        <div>
            <div className="countries">
                <h1>Countries</h1>
            </div>
        </div>
    );
};

export default Countries;