import { VersionType } from "./versionType";

export interface TellerTranFeeFields {
    calculationType: boolean | null;
    feeCode: boolean | null;
    feeOption: boolean | null;
    relCodeList: number[];
    relationFeeAmount: number[];
    typeCode: boolean | null;
    version1: VersionType;
}