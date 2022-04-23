import { Controller } from "@/presentation/protocols";
import { FakeRankingRepository } from "@/infra/fake/repositories";
import { LastRankingLoaderService } from "@/data/services";
import { LoadLastRankingController } from "@/presentation/controller";

export const makeLoadLastRankingController = (): Controller => {
  const repository = new FakeRankingRepository();
  const loader = new LastRankingLoaderService(repository);
  return new LoadLastRankingController(loader);
};
