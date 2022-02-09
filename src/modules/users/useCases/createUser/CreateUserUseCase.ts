import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyInUse = this.usersRepository.findByEmail(email);
    if (emailAlreadyInUse) {
      throw new Error("E-mail already in use!");
    }

    const newUser = this.usersRepository.create({ email, name });
    return newUser;
  }
}

export { CreateUserUseCase };
