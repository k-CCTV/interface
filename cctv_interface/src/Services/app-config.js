let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8089"; // spring boot port 번호
}

export const API_BASE_URL = `${backendHost}`;
