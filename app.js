try {
const express = require('express');
const app = express();
require("config/app.config");
} catch (e) {
  console.error(" \x1b[1m error : ~/app.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}
