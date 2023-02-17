import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }


  /* Esse método deve receber parte do título de um jogo ou o título inteiro e retornar um ou mais jogos que derem match com a consulta. A consulta também deve ser feita de forma case insensitive */
  async findByTitleContaining(param: string): Promise<Game[]> {
     return this.repository
      .createQueryBuilder('games')
      .where(`title ILIKE '%${param}%' `, { title : param})
      .getMany() 
      // Complete usando query builder
  }

  async countAllGames(): Promise<[{ count: string }]> {
    /* Esse método deve retornar uma contagem do total de games existentes no banco.  */
     return this.repository.query(`SELECT COUNT(*) FROM games`);  
    // Complete usando raw query
  }

/* Esse método deve receber o Id de um game e retornar uma lista de todos os usuários que possuem o game do Id informado */
  async findUsersByGameId(id: string): Promise<User[]> {
     return this.repository
      .createQueryBuilder()
      .relation(Game, 'users')
      .of({ id})
      .loadMany()
    
     
  }
}
