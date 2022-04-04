import { Injectable } from '@nestjs/common';
import {NewsPost} from "./news.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateNewsPostDto} from "./dto/create-news-post.dto";

@Injectable()
export class NewsService {

    constructor(@InjectModel(NewsPost) private newsRepository: typeof NewsPost) {
    }

    async createNewsPost(dto: CreateNewsPostDto){
        const newsPost = await this.newsRepository.create(dto);
        return newsPost;
    }

    async getAllNews(){
        const news = await this.newsRepository.findAll();
        return news;
    }
}
