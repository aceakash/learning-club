import express, { type Request, type Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Home from "./components/Home";

const app = express();

app.get("/", (req: Request, res: Response) => {
  const html = ReactDOMServer.renderToString(React.createElement(Home));
  res.send(`<!DOCTYPE html>${html}`);
});

app.get("/repositories", (req: Request, res: Response) => {
  res.send("List of GitHub repositories");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
