import {ApiProperty} from "@nestjs/swagger";

export class CreateNewsPostDto {
    @ApiProperty({example: 'Текст новости', description: 'Текст новости'})
    readonly newsText: string;
    @ApiProperty({example: 'https://www.images/news-images-3.jpg', description: 'URL картинки'})
    readonly imageURL: string;
}