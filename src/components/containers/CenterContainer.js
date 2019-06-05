import React from "react"
import containerStyles from "./CenterContainer.module.css"

const Container = ({ children }) => (
  <div className={containerStyles.nameContainer}>{children}</div>
)

export default Container;
