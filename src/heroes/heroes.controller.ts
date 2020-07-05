import { Controller, Param, Body, Post, Get } from '@nestjs/common';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { Hero } from './models/hero.model';
import { HeroesGameService } from './heroes.service';

@Controller('hero')
export class HeroesGameController {
  constructor(private readonly heroesGameService: HeroesGameService) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    return this.heroesGameService.killDragon(id, dto);
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesGameService.findAll();
  }
}
