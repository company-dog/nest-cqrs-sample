import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../../repository/hero.repository';
import { KillDragonCommand } from '../impl/kill-dragon.command';
import { Logger } from '@nestjs/common';

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  private readonly logger = new Logger('KillDragonHandler');

  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: KillDragonCommand) {
    this.logger.log('KillDragonCommand...');

    const { dragonId, heroId } = command;

    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+heroId),
    );

    hero.killEnemy(dragonId);
    hero.commit();
  }
}
