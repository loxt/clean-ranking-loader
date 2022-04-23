import { LastRankingLoader } from "@/domain/usecases";
import { LoadLastRankingRepository } from "@/data/contracts";
import { RankingScore } from "@/domain/entities";
import { RankingUnavailableException } from "@/domain/exceptions";

export class LastRankingLoaderService implements LastRankingLoader {
  constructor(
    private readonly loadLastRankingRepository: LoadLastRankingRepository
  ) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableException(
        "Last ranking is available only between 21:00 and 00:00"
      );
    }
    return this.loadLastRankingRepository.loadLastRanking();
  }
}
