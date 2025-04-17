import { VersionType } from "./versionType";

export interface BatchRcFields {
    batchReturnCode: boolean | null;
    batchReturnCodeDefinedType: boolean | null;
    batchReturnCodeDescription: boolean | null;
    version1: VersionType;
}