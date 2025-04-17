import { VersionType } from "./versionType";
export interface TellerTranValidateFields {
    after: number[];
    at: number[];
    before: number[];
    helpCode: number[];
    tableDepth: boolean | null;
    version1: VersionType;
}
