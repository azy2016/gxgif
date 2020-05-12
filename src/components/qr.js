import React from "react"

export default () => (
    <div style={{
        padding: `8px`,
        border: `1px solid #eee`,
        boxShadow: `0 2px 5px rgba(0, 0, 0, .12)`,
        marginBottom: `10px`

    }}>
        <p style={{
            fontSize: `16px`,
            fontWeight: `bold`,
            borderBottom: `1px solid #eee`,
            lineHeight: `24px`,
            color: `#e74291`
        }}>微信公众号</p>
        <img style={{
            width: `100%`
        }} src="https://pb3.pstatp.com/large/pgc-image/9b29c5f789884c60a88f07212069060b" alt="微信二维码" />
    </div>
)