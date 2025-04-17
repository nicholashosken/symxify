import { VersionType } from "./versionType";

export interface DebtRatioFields {
    fieldNo: number[];
    fieldUse: number[];
    payFactor: boolean | null;
    payUseCode: boolean | null;
    type: boolean | null;
    version1: VersionType;
}