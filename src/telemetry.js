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


registerInstrumentations({
  instrumentations: [getWebAutoInstrumentations()],
});