import React from "react"
import Footer from "./footer"

export default ({children}) => (
    <div style={{
        margin: `0`,
        padding: `0`
    }}>
        {children}
        <Footer />
    </div>
)