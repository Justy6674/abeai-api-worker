export default {
  async fetch(request, env) {
    const mainWorkerUrl = 'https://abeai-proxy.downscaleweightloss.workers.dev';
    return fetch(mainWorkerUrl, request);
  }
}
