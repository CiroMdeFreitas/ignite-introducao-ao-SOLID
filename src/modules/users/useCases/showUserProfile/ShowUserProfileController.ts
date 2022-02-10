import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const userProfile = this.showUserProfileUseCase.execute({ user_id });

      return response.status(201).json(userProfile);
    } catch (error) {
      return response.status(404).send({ error });
    }
  }
}

export { ShowUserProfileController };
