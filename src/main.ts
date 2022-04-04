import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

const cors = require('cors');

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.use(cors({
        origin: 'http://localhost:3000',
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
        credentials: true,
    }));

/*    const config = new DocumentBuilder()
        .setTitle('Backend for social network')
        .setDescription('Documentation REST API')
        .setVersion('1.0.0')
        .addTag('Social network')
        .build()*/

    await app.listen(PORT, ()=> console.log(`Server started at port = ${PORT}`))

}


start()