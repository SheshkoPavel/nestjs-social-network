import { Injectable } from '@nestjs/common';
import {NewsPost} from "./news.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateNewsPostDto} from "./dto/create-news-post.dto";
import {UpdateNewsPostDto} from "./dto/update-news-post.dto";

@Injectable()
export class NewsService {

    constructor(@InjectModel(NewsPost) private newsRepository: typeof NewsPost) {
    }

    async createNewsPost(dto: CreateNewsPostDto){
        const newsPost = await this.newsRepository.create(dto);
        return newsPost;
    }

    async getAllNewsASC(){
        const news = await this.newsRepository.findAll({order: [["id", "ASC"]]});
        return news;
    }

    async deleteNews(delId: number){
        return await this.newsRepository.destroy({
            where: {id: delId}
        });
    }

    async updateNews(dto: UpdateNewsPostDto){
        return await this.newsRepository.update({newsText: dto.newNewsText},{
            where: {id: dto.updateId}
        });
    }
}
