const Mock = require('mockjs')

Mock.setup({
  timeout: '200-600'
})

const id = Mock.mock('@id')
// console.log(id)

const obj = Mock.mock({
	id: '@id'
})
// console.log(obj)


const userInfo = Mock.mock({
	id: "@id()", //得到随机的id
	username: "@cname()", //随机生成中文名字
	date: "@date()", //随机生成日期
	avator: "@image('200x200','#50B347','#fff','avatar')", //生成图片，参数：size,background,foreground,text
	description: "@paragraph()", //描述
	ip: "@ip()", //IP地址
	email: "@email()" //email
})

module.exports = function (app: any) {
  app.use('/getUsers', (req: any, res: any) => {
    res.json(userInfo)
  });
}

console.log(userInfo)