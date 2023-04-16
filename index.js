const express = require('express') //nạp express trong node_modules xong lưu vào biến express
const app = express() // gọi express trả về đối tượng đại diện cho web
const port = 3000 

//Định nghĩa route(path)
app.get('/trang-chu', (req, res) => {
  res.send('Hello World!') // response trả về Hello World
})

// listen to port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})