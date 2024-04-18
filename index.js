import express from "express";
import { route } from "./route.js";

const app = express();

app.use("route", route);

app.listen(3000);
