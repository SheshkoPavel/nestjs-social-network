import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateNewsPostDto} from "./dto/create-news-post.dto";
import {NewsService} from "./news.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {NewsPost} from "./news.model";
import {DeleteNewsByIdDto} from "./dto/delete-news-by-id.dto";

@ApiTags('Доступные запросы для Новостей')
@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {
    }

    @ApiOperation({summary: 'Добавление новости'})
    @ApiResponse({status: 201, type: NewsPost})
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

    @ApiOperation({summary: 'Удаление новости по id', description: 'After request you will get text response'})
    @ApiResponse({status: 200, description: `0: error_Something goes wrong ;    1: News with ID ___ was deleted; ` })
    @Delete(':newsId')
    async deletePost(@Param('newsId') newsId: number ){
        const del = await this.newsService.deleteNews(newsId)
        if(del === 0) {
            return "Something goes wrong"
        }
        return `News with ID ${newsId} was deleted`
    }

    /*    @ApiOperation({summary: 'Удаление новости по id'})
    @ApiResponse({status: 200, description: "1: deleted, 0: error" })
    @Delete()
    async deletePost(@Body() newPostDto: DeleteNewsByIdDto){
        const del = await this.newsService.deleteNews(newPostDto.id)
         if(del === 0) {
             return "Something goes wrong"
         }
         return `News with ID ${newPostDto.id} was deleted`
    }*/
}
