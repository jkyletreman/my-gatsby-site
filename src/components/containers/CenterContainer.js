import React from "react"
import containerStyles from "./CenterContainer.module.css"

const  CenterContainer = ({ children }) => (
  <div className={containerStyles.centered}>{children}</div>
)

export const Center = ({ children }) => (
  <div className={containerStyles.center}>{children}</div>
)

export default CenterContainer;
