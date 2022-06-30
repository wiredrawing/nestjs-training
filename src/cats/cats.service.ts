import {Injectable} from '@nestjs/common';

@Injectable()
export class CatsService {

  /**
   *
   */
  getCats(): Array<String> {
    return [
      "文字列型のArray"
    ];
  }
}
