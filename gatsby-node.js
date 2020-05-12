const jsonData = require('./content/db.json');
exports.createPages = async ({ actions: { createPage } }) => {
    const NUM = 20; //每页数据数量
    const length = jsonData.length;
    const page = Math.ceil(length / NUM); //总页数
    let chuckData = []; //存储每页的数据
    let nowPage = 1; //当前页数
    jsonData.forEach((data,index,obj) => {
        chuckData.push(data);
        if (chuckData.length >= NUM || index === obj.length - 1){
            createPage({
                path: nowPage === 1 ? '/' : `/page/${nowPage}`,
                component: require.resolve(`./src/templates/index.js`),
                context: { 
                    chuckData,
                    nowPage,
                    page,
                },
            })
            nowPage++;
            chuckData = [];
        }
  })


}