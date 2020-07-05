import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { HeroRepository } from '../../repository/hero.repository';
import { DropAncientItemCommand } from '../impl/drop-ancient-item.command';
import { Logger } from '@nestjs/common';

@CommandHandler(DropAncientItemCommand)
export class DropAncientItemHandler
  implements ICommandHandler<DropAncientItemCommand> {
  private readonly logger = new Logger('DropAncientItemHandler');

  constructor(
    private readonly heroRepo: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DropAncientItemCommand) {
    this.logger.log('Async DropAncientItemCommand...');
    const { heroId, itemId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.heroRepo.findOneById(+heroId),
    );

    hero.addItem(itemId);
    hero.commit();
  }
}
