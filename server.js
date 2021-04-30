const express = require('express')
const app = express()

const port = 3000



const TimeMe =(req, res , next)=>{
console.log('Time :' , Date.now() , 'Request Type:', req.method  , 'path :' ,req.path)
next()
}

 function testTime (req, res, next) {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  if (day != 6 && day != 0 && hours > 8 && hours < 17) {
      res.status(200);
      next();
  } else {
      next( res.sendFile(__dirname +'/error.html'));
  }
};


app.get('/' ,TimeMe ,testTime, (req , res)=> 
{
    // console.table({method : req.method , path : req.path })
    res.sendFile(__dirname +'/home.html')
} )



app.get('/contact' ,TimeMe , (req , res)=> {res.sendFile(__dirname +'/contact.html')}  )


app.get('/service' ,TimeMe , (req , res)=> {res.sendFile(__dirname +'/service.html')}  )


app.get('/team' ,TimeMe , (req , res)=> {res.sendFile(__dirname +'/team.html')}  )

app.get('/style.css' , (req , res)=> {res.sendFile(__dirname +'/style.css')}  )



app.listen(port , ()=>console.log(`server run in ${port}`))



