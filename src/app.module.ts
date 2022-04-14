import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { NewsModule } from './news/news.module';
import {ConfigModule} from "@nestjs/config";
import {NewsPost} from "./news/news.model";

@Module( {
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,  //To use Docker I need use "postgres" instead "localhost" here
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [NewsPost],
            autoLoadModels: true
        }),
        NewsModule,
    ]
})

export class AppModule {}