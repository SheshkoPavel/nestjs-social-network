import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateNewsPostDto} from "./dto/create-news-post.dto";
import {NewsService} from "./news.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {NewsPost} from "./news.model";

@ApiTags('Доступные запросы для Новостей')
@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {
    }

    @ApiOperation({summary: 'Добавление новости'})
    @ApiResponse({status: 200, type: NewsPost})
    @Post()
    create(@Body() newPostDto: CreateNewsPostDto){
        return this.newsService.createNewsPost(newPostDto);
    }

    @ApiOperation({summary: 'Получение всех Новостей'})
    @ApiResponse({status: 200, type: [NewsPost]})
    @Get()
    getAll(){
        return this.newsService.getAllNews();
    }

}
