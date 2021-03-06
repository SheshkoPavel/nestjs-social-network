import {ApiProperty} from "@nestjs/swagger";

//Типизация с декораторами для Swagger

export class UpdateNewsPostDto {
    @ApiProperty({example: '3', description: 'ID поста для изменения', })
    readonly updateId: number;
    @ApiProperty({example: 'В Египте выпал снег', description: 'Новый текст для поста', })
    readonly newNewsText: string;
}

export class UpdateNewsPostResponseDto {
    @ApiProperty({example: '1', description: 'Код ответа', })
    readonly responseCode: number;
    @ApiProperty({example: 'News with ID 28 was edited', description: 'Сообщение о удалении', })
    readonly message: string;
}