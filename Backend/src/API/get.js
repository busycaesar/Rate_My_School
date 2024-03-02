/**
 * Handle GET '/' request.
 * @memberof module:APIs
 * @param {Request} req Request
 * @param {Response} res Response
 * @returns Returns a response for the received request.
 */
const getRoot = (req, res) => res.status(200).json("Hello from Backend!");

module.exports = { getRoot };
