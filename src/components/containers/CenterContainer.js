import React from "react"
import containerStyles from "./CenterContainer.module.css"

const  CenterContainer = ({ children }) => (
  <div className={containerStyles.centered}>{children}</div>
)

export default CenterContainer;
