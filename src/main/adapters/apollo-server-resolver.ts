import { Controller } from "@/presentation/protocols";
import { ApolloError } from "apollo-server-express";

export const adaptResolver = async (controller: Controller): Promise<any> => {
  const httpResponse = await controller.handle();

  console.log(httpResponse.body.message);
  switch (httpResponse.statusCode) {
    case 200:
      return httpResponse.body;
    default:
      throw new ApolloError(httpResponse.body, "500");
  }
};
