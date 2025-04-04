
const http=require("http")
const sever=http.createServer((req,res)=>{
    const {url}=req
    res.write(`<h1> Xinchao ${url}</h1>`)
    res.end ()
})

sever.listen(3000)