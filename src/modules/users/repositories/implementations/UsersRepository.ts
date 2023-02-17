import { getRepository, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  /* Esse método deve receber o Id de um usuário e retornar os dados do usuário encontrado juntamente com os dados de todos os games que esse usuário possui. */
  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    console.log(user_id)
    const user = await this.repository.findOne({
      where: {
        id: user_id,
      },
      relations: ['games']
    })
    if(!user){
      throw new Error('User doesn´t exists, try another one')
    }

    return user;
  }
/* Esse método deve retornar a listagem de usuários cadastrados em ordem alfabética (**ASC**).
Lembre-se que aqui deve ser usado **raw query** para a consulta. */
  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    
    return this.repository.query('Select * FROM users order by first_name');  // Complete usando raw query
  }

  /* Esse método deve receber first_name e last_name e retornar um usuário que possua os mesmos first_name e last_name. Aqui você deve encontrar o usuário ignorando se o argumento passado está em caixa alta ou não.  */
  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(`SELECT * FROM users where first_name ~* '${first_name}'
    AND last_name ~* '${last_name}'`);
     // Complete usando raw query . ~* é tipo um LIKE só q ignora o case sensitive (Postgres)
  }
}
