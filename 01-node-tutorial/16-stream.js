const { error } = require('console')
const {createReadStream}=require('fs')
const stream=createReadStream('./content/big.txt',{highWaterMark:1000})
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>console.log(err))