import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: [
    "**/*.{ts,tsx}",           
    "!**/node_modules/**",         
    "!**/.next/**",                
    "!**/*.d.ts",                 
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
