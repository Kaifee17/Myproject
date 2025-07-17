// sentry.js
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://eea585f41943f117850e85b3d27d469f@o4509580165971968.ingest.us.sentry.io/4509580170493952",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.httpIntegration({ tracing: true }), // Tracks HTTP spans
    Sentry.expressIntegration(),               // Express integration
  ],
 // tracesSampleRate: 1.0, // You can lower this in production
  sendDefaultPii: true,
});

export default Sentry;
