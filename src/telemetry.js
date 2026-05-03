import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const config = window.RUNTIME_CONFIG || {};

const exporter = new OTLPTraceExporter({
  url: window.location.origin + (config.OTEL_URL || '/api/otlp/v1/traces'),
});

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'ptincatering-frontend',
    'deployment.environment': config.ENVIRONMENT,
  }),
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register();

//Registra las instumentaciones automaticas que generan spans sin que tengamos que añadir codigo en cada llamada
registerInstrumentations({
  tracerProvider: provider, //Vincula las instrumentaciones al provider que creamos, en lugar de buscar uno global
  instrumentations: [
    getWebAutoInstrumentations({
      '@opentelemetry/instrumentation-fetch': { //Intercepta automaticamente todos los fetch de la app y genera un span por cada llamada
        ignoreUrls: [/\/api\/otlp/],  //Evita el loop, sin esto, el fetch que envia spans al collector generaria un nuevo span, que generaria otro fetch, infinitamente
      },
      '@opentelemetry/instrumentation-xml-http-request': { //Igual, pero para llamadas XMLHttpRequest
        ignoreUrls: [/\/api\/otlp/],
      },
      '@opentelemetry/instrumentation-document-load': { enabled: true }, //Genera un span cuando se carga la pagina, con tiempos de navegacion, carga de recursos, etc
      '@opentelemetry/instrumentation-user-interaction': { enabled: false }, // Desactivado porque instrumemta clcisk, inputs y otros eventos del usuario, generando demasiado ruido sin mucho valor
    }),
  ],
});


//Forzamos a que cuando el usuario recarge o cambie de pestaña, toda la informacion restante se envie al collector
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    provider.forceFlush().catch(console.error);
  }
});