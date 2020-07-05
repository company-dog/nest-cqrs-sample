import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';
import { Logger } from '@nestjs/common';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  private readonly logger = new Logger('GetHeroesHandler');

  constructor(private readonly heroRepo: HeroRepository) {}

  async execute(query: GetHeroesQuery): Promise<any> {
    this.logger.log('Async GetHeroesQuery...');
    return this.heroRepo.findAll();
  }
}
