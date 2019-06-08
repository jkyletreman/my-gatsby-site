import React, { useState, useEffect } from "react"
import { useTransition, animated } from "react-spring"
import shuffle from 'lodash/shuffle'

import Github from "./icons/Github"
import Twitter from "./icons/Twitter"

/* 
    instead of using a component based approach, use images and css 
    use react-spring to randomize placement inside a grid
    copy codesandbox
*/
const data = [
    {item: <Github />, key:'github' }, {item: <Twitter />, key: 'twitter' }
]

const IconRow = () => {
    const [icons, set] = useState(data)
    console.log('icons', icons)
    const transitions = useTransition(icons, icon => icon.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    });
    console.log('trans', transitions)
    useEffect(() => void setInterval(() => set(shuffle), 2000), [])

    return (
        <div>
            {transitions.map(({ item, props, key }) => {
                <animated.div key={key} style={props}>{item}</animated.div>
            }
            )}
        </div>
    )
}

export default IconRow
