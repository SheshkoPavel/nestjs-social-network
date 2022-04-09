import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateNewsPostDto} from "./dto/create-news-post.dto";
import {NewsService} from "./news.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {NewsPost} from "./news.model";
import {DeleteNewsByIdDto} from "./dto/delete-news-by-id.dto";
import {UpdateNewsPostDto, UpdateNewsPostResponseDto} from "./dto/update-news-post.dto";

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
    @ApiResponse({status: 200, type: DeleteNewsByIdDto })
    @Delete(':newsId')
    async deletePost(@Param('newsId') newsId: number ): Promise<DeleteNewsByIdDto>{
        const delResponseCode = await this.newsService.deleteNews(newsId);
        if(delResponseCode === 0) {
            return {
                responseCode: delResponseCode,
                message: "Something goes wrong"
            }
        }
        return {
            responseCode: delResponseCode,
            message: `News with ID ${newsId} was deleted`
        }
    }

    @ApiOperation({summary: 'Изменение новости по id', description: 'В ответе вы получите responseCode и сообщение'})
    @ApiResponse({status: 200, type: UpdateNewsPostResponseDto })
    @Patch()
    async updatePost(@Body() updatePostDto: UpdateNewsPostDto): Promise<UpdateNewsPostResponseDto>{
        const [updateResponseCode] = await this.newsService.updateNews(updatePostDto);
        if(updateResponseCode === 0){
            return {
                responseCode: updateResponseCode,
                message: "Something goes wrong"
            }
        }
        return {
            responseCode: updateResponseCode,
            message: `Text in post with ID ${updatePostDto.updateId} was updated`
        }
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
