import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"
import { SocialIcon } from 'react-social-icons';

import "./App.css"

const Icons = [
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/jkyletreman',
    }, {
        id: 'github',
        url: 'https://github.com/jkyletreman',
    }, {
        id: 'twitter',
        url: 'https://twitter.com/jkyletreman',
    }
]

const IconBox = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(Icons[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })

    useEffect(
        () => void setInterval(() => set(state => (state + 1) % 3), 2000),
        []
    )

    return transitions.map(({ item, props, key }) => (
        <animated.div className="iconContainer" key={key} style={props}>
            <SocialIcon className='icon' url={item.url} />
        </animated.div>
    ))
}

export default IconBox
