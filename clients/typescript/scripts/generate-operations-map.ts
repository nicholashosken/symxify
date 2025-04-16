import fs from 'fs';
import path from 'path';
import { available_operations } from './available-operations-map';

// Root directory for your types (e.g., types/AccountService, etc.)
const types = path.join(__dirname, '../src/types');
let operations = available_operations;

const mappingEntries: string[] = [];
const importStatements: string[] = [];
const runtimeMapEntries: string[] = [];

for (const op of operations) {
  const allFiles = fs.readdirSync(types);

  // Get all request and response files
  const requestFiles = allFiles.filter((f) => f.endsWith('Request.ts'));
  const responseFiles = new Set(
    allFiles.filter((f) => f.endsWith('Response.ts')).map((f) => f.replace('Response.ts', ''))
  );

  const methodName = toCamelCase(op.operationName);
  let requestType = `${toTitleCase(op.requestTypeName)}`;
  let responseType = `${toTitleCase(op.responseElementName)}`;

  if (requestType.match("Update") && requestType.match("ID")) {
    requestType = requestType.replace("ID", "Id");
  }

  if (responseType.match("Update") && responseType.match("ID")) {
    responseType = responseType.replace("ID", "Id");
  }

  const serviceIndex: number = op.objectNamespace.split("/").length - 1;
  const service = op.objectNamespace.split("/")[serviceIndex];

  mappingEntries.push(
    `  ${methodName}: { request: ${requestType}, response: ${responseType}, service: "${service}" };`
  );
  runtimeMapEntries.push(`  "${methodName}": "${service}"`);

  let requestImportPath = `../types/${requestType}`;
  let responseImportPath = `../types/${responseType}`;

  if (requestImportPath.match("Update") && requestImportPath.match("ID")) {
    requestImportPath = requestImportPath.replace("ID", "Id");
  }

  if (responseImportPath.match("Update") && responseImportPath.match("ID")) {
    responseImportPath = responseImportPath.replace("ID", "Id");
  }

  importStatements.push(`import { ${requestType} } from '${requestImportPath}';`);
  importStatements.push(`import { ${responseType} } from '${responseImportPath}';`);
}

// Write the TypeScript type map
const tsContent = `// @ts-nocheck
// Auto-generated Operation Map — do not edit manually.

${[...new Set(importStatements)].join("\n")}

export interface OperationMap {
${mappingEntries.join("\n")}
}
`;

fs.writeFileSync(path.join(__dirname, "../src/generated/operation-map.ts"), tsContent);
console.log("✅ TypeScript OperationMap written");

// Write the runtime map
const runtimeContent = `// Auto-generated Operation Service Map — do not edit manually.

export const OperationServiceMap = {
${runtimeMapEntries.join(",\n")}
} as const;
`;

fs.writeFileSync(path.join(__dirname, "../src/generated/operation-map-runtime.ts"), runtimeContent);
console.log("✅ Runtime OperationServiceMap written");

function toTitleCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
