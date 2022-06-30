import {Module} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {CatsController} from "./cats.controller";
import {AppService} from "../app.service";
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService, AppService],
})
export class CatsModule {
}
