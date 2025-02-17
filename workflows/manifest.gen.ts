// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$0 from "./loaders/events.ts";
import * as $$$1 from "./loaders/get.ts";
import * as $$$$0 from "./handlers/workflowRunner.ts";
import * as $$$$$$$$$0 from "./actions/start.ts";
import * as $$$$$$$$$1 from "./actions/cancel.ts";
import * as $$$$$$$$$2 from "./actions/signal.ts";

const manifest = {
  "loaders": {
    "workflows/loaders/events.ts": $$$0,
    "workflows/loaders/get.ts": $$$1,
  },
  "handlers": {
    "workflows/handlers/workflowRunner.ts": $$$$0,
  },
  "actions": {
    "workflows/actions/cancel.ts": $$$$$$$$$1,
    "workflows/actions/signal.ts": $$$$$$$$$2,
    "workflows/actions/start.ts": $$$$$$$$$0,
  },
  "name": "workflows",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
