import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';
import { Logger } from '@nestjs/common';

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler
  implements IEventHandler<HeroKilledDragonEvent> {
  private logger = new Logger('HeroKilledDragonHandler');

  handle(event: HeroKilledDragonEvent) {
    this.logger.log('HeroKilledDragonEvent...');
  }
}
