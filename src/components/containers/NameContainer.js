import React from "react"
import containerStyles from "./CenterContainer.module.css"

const  NameContainer = ({ children }) => (
  <div className={containerStyles.nameContainer}>{children}</div>
)

export default NameContainer;
