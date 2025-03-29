// Simple 5-line proxy (no business logic)
export default {
  async fetch(request, env) {
    const mainWorkerUrl = 'https://abeai-proxy.YOUR_ACCOUNT.workers.dev';
    return fetch(mainWorkerUrl, request);
  }
}
