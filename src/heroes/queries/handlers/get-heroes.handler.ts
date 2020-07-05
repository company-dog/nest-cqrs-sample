import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';
import { Logger } from '@nestjs/common';
import { Hero } from 'src/heroes/models/hero.model';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  private readonly logger = new Logger('GetHeroesHandler');

  constructor(private readonly heroRepo: HeroRepository) {}

  async execute(query: GetHeroesQuery): Promise<Hero[]> {
    this.logger.log('Async GetHeroesQuery...');
    return this.heroRepo.findAll();
  }
}
