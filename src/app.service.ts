import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
    getNews() {
        return [{id: 1, newsPost: 'This is a very interesting news'}]
    }
}