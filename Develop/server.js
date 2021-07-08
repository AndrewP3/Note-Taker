const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const fs = require("fs");

// For future routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
