import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import cors from 'cors';
const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () =>
      console.log('server started on port - ' + PORT),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
