import { VersionType } from "./versionType";

export interface SecFieldFields {
    creSecField: number[];
    recordSelection: boolean | null;
    reqSecField: number[];
    requireField: number[];
    revSecField: number[];
    version1: VersionType;
}