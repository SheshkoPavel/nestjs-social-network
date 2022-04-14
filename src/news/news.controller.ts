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

    @ApiOperation({summary: 'Получение всех Новостей по возрастанию ID'})
    @ApiResponse({status: 200, type: [NewsPost]})
    @Get()
    getAllAsc(){
        return this.newsService.getAllNewsASC();
    }

    @ApiOperation({summary: 'Получение всех Новостей по убыванию ID'})
    @ApiResponse({status: 200, type: [NewsPost]})
    @Get('desc')
    getAllDesc(){
        return this.newsService.getAllNewsDESC();
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

}
