import { VersionType } from "./versionType";
export interface DocumentNumberFields {
    certificate: boolean | null;
    check: number[];
    receipt: boolean | null;
    version1: VersionType;
}
