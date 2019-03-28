const express = require('express')
const app = express()

app.get('/', function(req, res){
	res.send('<h1>hello</h1>')
})

app.listen(9093, function(){
	console.log('Node app start at 9093.')
})