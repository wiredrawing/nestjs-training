import {Controller, Get, Req, Post} from '@nestjs/common';
import {Request} from "express";
import {AppService} from "../app.service";
import {CatsService} from "./cats.service";
@Controller('cats')
export class CatsController {

  constructor(
    // private readonly  catsModule: CatsModule
    private readonly catsService : CatsService,
    private readonly  appService: AppService
  ) {
    console.log("Provider Serviceの注入");
    console.log("Provider Serviceの注入");
    // console.log(catsModule);
    console.log(catsService.getCats());
    console.log(appService.getHello());
  }
  // constructor(
  //   private readonly appService: AppService,
  //   private readonly catsService: CatsService) {
  //   // デフォルトのサービス
  //   console.log(appService);
  //   console.log(this.appService)
  //   // 追加のサービス
  //   console.log(appService);
  //   console.log(this.appService)
  // }


  @Get()
  findAll(@Req() request: Request): string {
    return "This action returns all cats";
  }

  @Get("/detail")
  detail(@Req() request: Request): string {
    let getParameters: object = request.query;
    console.log(getParameters);
    return "---";
  }

  @Post()
  postFunction(@Req() request: Request): string {
    let body: object = request.body;
    console.log(body);
    console.log(__dirname);
    return "post";
  }

  @Get("/service")
  service() {
    // console.log(this.catsService.getCats());
    // return this.appService.getHello()
    return "";
  }
}
