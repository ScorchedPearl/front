import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: [
    "**/*.{ts,tsx}",            // ✅ only scan your actual source files
    "!**/node_modules/**",          // ✅ exclude node_modules
    "!**/.next/**",                 // ✅ exclude Next.js build output
    "!**/*.d.ts",                   // ✅ avoid typing-only files
  ],
  generates: {
    "gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
};

export default config;
