import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";

@Module( {
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: 'social-network',
            models: [],
            autoLoadModels: true

        }),
    ]
})


export class AppModule {}