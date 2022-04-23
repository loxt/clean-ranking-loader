export class RankingUnavailableException extends Error {
  constructor(message: string) {
    super("Ranking unavailable: " + message);
    this.name = "RankingUnavailableException";
  }
}
