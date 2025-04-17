import { VersionType } from "./versionType";
export interface BatchRc {
    batchReturnCode: number | null;
    batchReturnCodeDefinedType: number | null;
    batchReturnCodeDescription: string;
    version1: VersionType;
}
