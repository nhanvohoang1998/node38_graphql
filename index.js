// cài thư viện express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
import express from 'express';

const app = express();
const port = 8081;

app.listen(port, ()=>{
    console.log(`be starting with port ${port}`)
})
