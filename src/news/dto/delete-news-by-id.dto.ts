import {ApiProperty} from "@nestjs/swagger";

export class DeleteNewsByIdDto {
    @ApiProperty({example: '4', description: 'ID новости для удаления', })
    readonly id: number;
}

