import { VersionType } from "./versionType";

export interface WireUscAuditInfoFields {
    locator: boolean | null;
    text: number[];
    version1: VersionType;
}