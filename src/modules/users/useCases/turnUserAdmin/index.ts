import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { TurnUserAdminController } from "./TurnUserAdminController";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

const usersRepository = UsersRepository.getInstance();
const turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);
const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);

export { turnUserAdminController };
