import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface NewsCreationAttributes {
    newsText: string
}

//По этой модели создаётся таблица в БД

@Table({tableName: 'news'})
export class NewsPost extends Model<NewsPost, NewsCreationAttributes> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'В Кении приземлилась инопланетная тарелка', description: 'Текст новости'})
    @Column({type: DataType.STRING, allowNull: false})
    newsText: string;

    @ApiProperty({example: 'https://cdn.pixabay.com/photo/eye-5248678__340.jpg', description: 'Адрес картинки'})
    @Column({type: DataType.STRING, allowNull: false})
    imageURL: string;

}