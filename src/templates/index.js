import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Item from "../components/item"
import Pagination from "../components/pagination"
import SEO from "../components/seo"
import Header from "../components/header"
import Style from "../styles/index.module.css"

export default ({pageContext: {chuckData, nowPage, page}}) => (
    <Layout>
        <SEO title="搞笑gif图片" description="" />
        <Header nav="index" />
        <Content>
            <div className={Style.list}>
                {
                    chuckData.map((value, index) => (
                        <Item key={index} obj={value} />
                    ))
                }
                <Pagination nowPage={nowPage} countPage={page}/>
            </div>
        </Content>
    </Layout>
)
