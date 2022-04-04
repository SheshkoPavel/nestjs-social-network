import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { NewsModule } from './news/news.module';

@Module( {
    controllers: [],
    providers: [],
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
        NewsModule,
    ]
})


export class AppModule {}