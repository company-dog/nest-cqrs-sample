import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';
import { Logger } from '@nestjs/common';

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
  private readonly logger = new Logger('HeroFoundItemHandler');

  handle(event: HeroFoundItemEvent) {
    this.logger.log('Async HeroFoundItemEvent...');
  }
}
