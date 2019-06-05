import React from "react"
import containerStyles from "./container.module.css"

const Container = ({ children }) => (
  <div className={containerStyles.nameContainer}>{children}</div>
)

export default Container;
