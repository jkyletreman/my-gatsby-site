//libraries
import React from "react"
// containers
import CenterContainer, {
    Center,
} from "../components/containers/CenterContainer"
// components
import Name from "../components/Name"
import IconBox from "../components/IconBox"

const IndexPage = () => (
    <CenterContainer>
        <Name />
        <Center>
            <IconBox />
        </Center>
    </CenterContainer>
)

export default IndexPage
