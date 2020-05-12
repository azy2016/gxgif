import React from "react"

export default ({children}) => (
    <div style={{
        display: `flex`,
        maxWidth: `960px`,
        margin: `5px auto`,
        justifyContent: `space-between`
    }}>
        {children}
    </div>
)