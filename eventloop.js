const request=require('http').request

const start=Date.now();

request('http://localhost:3000',(res)=>{
  res.on('data',()=>{})
  res.on('end',()=>{
    console.log(Date.now()-start);
  })
}).end()