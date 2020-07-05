import { Observable } from 'rxjs';
import { ICommand, ofType } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { map, delay } from 'rxjs/operators';
import { Logger } from '@nestjs/common';
import { DropAncientItemCommand } from '../commands/impl/drop-ancient-item.command';

const itemId = '0';

export class HeroesGameSagas {
  private readonly logger = new Logger('HeroesGameSagas');

  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      delay(1000),
      map(event => {
        this.logger.log('Inside [HeroesGameSagas] Saga');
        return new DropAncientItemCommand(event.heroId, itemId);
      }),
    );
  };
}
