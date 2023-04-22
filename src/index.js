const path = require('path')
const express = require('express') //nạp express trong node_modules xong lưu vào biến express
const morgan = require('morgan')
const hbs = require('express-handlebars')
const app = express() // gọi express trả về đối tượng đại diện cho web
const port = 3000 

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

//Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//set views
app.set('views', path.join(__dirname, 'resources/views'))

//Định nghĩa route(path)
app.get('/trang-chu', (req, res) => {
  res.render('home')
})

// listen to port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

