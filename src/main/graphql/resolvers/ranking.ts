import { makeLoadLastRankingController } from "@/main/factories";
import { adaptResolver } from "@/main/adapters/apollo-server-resolver";

export default {
  Query: {
    lastRanking: async (): Promise<any> =>
      adaptResolver(makeLoadLastRankingController()),
  },
};
