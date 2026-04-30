"use strict";

require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT || 8080);
const igraDir = path.join(__dirname, "igra");

app.get("/api/config", (_req, res) => {
  const raw = process.env.HINT_API_BASE;
  if (typeof raw !== "string" || !raw.trim()) {
    return res.status(503).json({
      error: "HINT_API_BASE is not set. Add it to .env or hosting environment variables."
    });
  }
  const hintApiBase = raw.trim().replace(/\/$/, "");
  res.json({
    hintApiBase,
    hintModel: process.env.HINT_MODEL || "deepseek-r1",
    hintApiKey: process.env.HINT_API_KEY || "dummy"
  });
});

const HOST = process.env.HOST || "0.0.0.0";

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use(express.static(igraDir));

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
