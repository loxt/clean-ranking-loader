import { Controller, HttpResponse } from "@/presentation/protocols";
import { RankingScoreViewModel } from "@/presentation/view-models";
import { ok, serverError } from "@/presentation/helpers";
import { LastRankingLoader } from "@/domain/usecases";

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load();

      return ok(RankingScoreViewModel.mapCollection(ranking));
    } catch (error) {
      return serverError(error);
    }
  }
}
