import React from 'react';
import { FaGithub } from "react-icons/fa";

const Github = (url) => (
    <a href={url}>
        <FaGithub
            style={{
                backgroundColor: "white",
                display: "flex",
            }}
        />
    </a>
)

export default Github