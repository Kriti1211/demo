const {writeFileSync}=require('fs')
for(let i=1;i<100000;i++)
{
    writeFileSync('./content/big.txt',`hello ${i}\n`,{flag:'a'})
}