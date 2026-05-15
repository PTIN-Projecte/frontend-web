import { WebTracerProvider} from '@opentelemetry/sdk-trace-web';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { MeterProvider, PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';

const config = window.RUNTIME_CONFIG || {};

const resource = resourceFromAttributes ({
  'service.name': 'ptincatering-frontend',
  'deployment.environment': config.ENVIRONMENT || 'testing',
});

const traceUrl = '/api/otlp/v1/traces';
const metricUrl = '/api/otlp/v1/metrics';


const exporter = new OTLPTraceExporter({ url: traceUrl });

const metricExporter = new OTLPMetricExporter({ url: metricUrl });

const provider = new WebTracerProvider({
  resource,
  spanProcessors: [
    new BatchSpanProcessor(exporter),
  ],
});

provider.register();

const meterProvider = new MeterProvider({
  resource,
  readers: [
    new PeriodicExportingMetricReader({
      exporter: metricExporter,
      exportIntervalMillis: 10000,
    }),
  ],
});


//Registra las instumentaciones automaticas que generan spans sin que tengamos que añadir codigo en cada llamada
registerInstrumentations({
  tracerProvider: provider,
  meterProvider: meterProvider,
  instrumentations: [
    getWebAutoInstrumentations({
      '@opentelemetry/instrumentation-fetch': {
        enabled: true,
        ignoreUrls: [/\/v1\/traces/, /\/v1\/metrics/],
      },

      '@opentelemetry/instrumentation-xml-http-request': {
        enabled: true,
        ignoreUrls: [/\/v1\/traces/, /\/v1\/metrics/],
      },

      '@opentelemetry/instrumentation-document-load': {
        enabled: true,
      },

      '@opentelemetry/instrumentation-user-interaction': {
        enabled: true,
      },
    }),
  ],
});

console.log(
  'Telemetry inicializada correctamente en:',
  traceUrl, metricUrl
);

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    provider.forceFlush().catch(console.error);
  }
});

window.addEventListener('pagehide', async () => {
  try {
    await provider.forceFlush();
    await meterProvider.forceFlush?.();
  } catch (err) {
    console.error(err);
  }
});

const meter = meterProvider.getMeter('frontend-tester');
const counter = meter.createCounter('prueba_conexion');
counter.add(1); 
console.log("Métrica de prueba generada manualmente");
