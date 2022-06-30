import {MiddlewareConsumer, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import {LoggerMiddleware} from "./middleware/logger.middleware";

@Module({
  // catsモジュールにまとめて移動
  imports: [CatsModule],
  controllers: [AppController],
  // プロバイダーサービス
  providers: [AppService],
})
export class AppModule {

  // ミドルウェアの適用
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/");
  }
}
