import { VersionType } from "./versionType";
export interface SymXInstanceFields {
    crudLoggingThreshold: boolean | null;
    description: boolean | null;
    instanceId: boolean | null;
    internalListSize: boolean | null;
    internalProviderKeyStore: boolean | null;
    name: boolean | null;
    otherLoggingThreshold: boolean | null;
    powerOnLoggingThreshold: boolean | null;
    tokenValidity: boolean | null;
    transactionsLoggingThreshold: boolean | null;
    version1: VersionType;
}
