import { Router } from "express";
import { makeLoadLastRankingController } from "@/main/factories";
import { adaptRoute } from "@/main/adapters";

export default (router: Router): void => {
  router.get("/rankings/last", adaptRoute(makeLoadLastRankingController()));
};
