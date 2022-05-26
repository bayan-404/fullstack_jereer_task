import express, {Express} from 'express';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000

app.listen(PORT, ()=>
console.log(`server is running on http://localhost:${PORT}`)
)