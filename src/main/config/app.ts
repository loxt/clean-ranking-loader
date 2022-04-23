import { setupRoutes } from "@/main/config/routes";

import express from "express";
import { setupApolloServer } from "@/main/config/apollo-server";

const app = express();
setupRoutes(app);
setupApolloServer(app);

export default app;
