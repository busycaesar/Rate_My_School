const express = require("express");
const router = express.Router();
const { getRoot } = require("./get");

/**
 * Functions handling APIs
 * @module APIs
 */

// List all the APIs for all http methods.

router.get("/", getRoot);

module.exports = router;
