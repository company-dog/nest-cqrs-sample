import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameController } from './heroes.controller';
import { HeroRepository } from './repository/hero.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { HeroesGameService } from './heroes.service';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesGameController],
  providers: [
    HeroesGameService,
    HeroRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesModule {}
