const config = window.RUNTIME_CONFIG || {};

const getBaseUrl = () => {
  const hostname = window.location.hostname;

  if (hostname.includes('svc.cluster.local')) {
    return config.API_URL_INTERNAL;
  }

  return config.API_URL_EXTERNAL || "http://192.168.1.141:30080";
};

export const BASE_URL = getBaseUrl();