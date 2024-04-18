import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MbsMainModule } from './mbs-main/mbs-main.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MbsMainModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
