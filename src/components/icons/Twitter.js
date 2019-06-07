import React from 'react';
import { FaTwitterSquare } from "react-icons/fa"

const Twitter = (url) => (
    <a href={url}>
        <FaTwitterSquare
            style={{
                backgroundColor: "white",
                display: "flex",
            }}
        />
    </a>
);

export default Twitter;