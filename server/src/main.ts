import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8080;
  console.log("Server start on port:", PORT);

  await app.listen(PORT);
}
bootstrap();
