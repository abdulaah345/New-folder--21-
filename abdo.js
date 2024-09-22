// let head=document.querySelectorAll('.a')[1];
// head.style.color = 'red';
// console.log(head)
// let students=["abdo","nour",1]
// let last=students[students.length-1]
// let last1=students.pop(); 
// console.log(last)
// console.log(students)
// console.log(last1)
// console.log(students)
// students[10]="yousef"
// console.log(students[7])

// students.map((student)=>{
//     console.log(student)
// })
// let students1={name:"abdo",age:"23"}
// console.log(students1['name'])

// console.log(process.argv);
// let n1 =+process.argv[2];
// let n2 =+process.argv[3];
// console.log(n1+n2)

// const name= require('./module/my-module');
// console.log(name);

const http=require('http');
const server= http.createServer((req,res)=>{
// res.setHeader('content-type','text/html')
// res.statusCode=200;
//  res.write('hallo')
//  res.write('hallo abdo');
if(req.url=='/'){
    res.write('hallo home')
}else if(req.url=='/about'){
    res.write('hallo about2')

}
 res.end();
})
server.listen(3000,'127.0.0.1',()=>console.log('server is listen on port 3000'))