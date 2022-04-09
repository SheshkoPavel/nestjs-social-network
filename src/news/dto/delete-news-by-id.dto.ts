import {ApiProperty} from "@nestjs/swagger";

export class DeleteNewsByIdDto {
    @ApiProperty({example: '1', description: 'Код ответа', })
    readonly responseCode: number;
    @ApiProperty({example: 'News with ID 28 was deleted', description: 'Сообщение о удалении', })
    readonly message: string;
}

