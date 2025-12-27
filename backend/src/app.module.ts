import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AdaptersModule } from './adopters/adopters.module';
import { CatsModule } from './cats/cats.module';
import { AdoptionsModule } from './adoptions/adoptions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AdaptersModule,
    CatsModule,
    AdoptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
