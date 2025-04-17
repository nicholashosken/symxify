import { createSymxifyClient } from "symxify-client";

export const symxify = createSymxifyClient({
  symxifyType: "Self-hosted",
  symxifyUrl: "http://localhost",
})

