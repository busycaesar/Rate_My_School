import axios from "axios";

/**
 * All the functions for fetching APIs.
 * @module FetchingAPIs
 */

/**
 * Fetch GET '/' API from backend.
 * @memberof module:FetchingAPIs
 * @returns The data received from the backend.
 */
const getRoot = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/`);
  if (response.status == 200) return response.data;
  else throw new Error("Server Error!");
};

export { getRoot };
