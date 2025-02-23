import { defineConfig } from "drizzle-kit";

defineConfig({
    schema:"./src/db/schema.js",
    out:"./drizzle"
})