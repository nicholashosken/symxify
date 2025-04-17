import { VersionType } from "./versionType";
export interface SymXInstance {
    crudLoggingThreshold: number | null;
    description: string;
    instanceId: number | null;
    internalListSize: number | null;
    internalProviderKeyStore: string;
    name: string;
    otherLoggingThreshold: number | null;
    powerOnLoggingThreshold: number | null;
    tokenValidity: number | null;
    transactionsLoggingThreshold: number | null;
    version1: VersionType;
}
