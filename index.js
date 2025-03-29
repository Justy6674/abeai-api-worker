// Simple 5-line proxy (no business logic)
export default {
  async fetch(request, env) {
    const mainWorkerUrl = 'https://abeai-proxy.d9cc7ec108df8e78246e2553ae88c6c2.workers.dev';  // Use your worker's subdomain here
    return fetch(mainWorkerUrl, request);  // Forward the request to abeai-proxy
  }
}
