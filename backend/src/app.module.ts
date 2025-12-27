import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AdaptersModule } from './adopters/adopters.module';
import { CatsModule } from './cats/cats.module';
import { AdoptionsModule } from './adoptions/adoptions.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'), 
      exclude: ['/api/(.*)'], 
    }),
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
