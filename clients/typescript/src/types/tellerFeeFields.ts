import { VersionType } from "./versionType";

export interface TellerFeeFields {
    calculationType: boolean | null;
    feeDescription: boolean | null;
    feeGlCode: boolean | null;
    relCodeList: number[];
    relSvLnTypes: number[];
    relationBaseAmount: number[];
    relationBaseCount: number[];
    relationFeeAmount: number[];
    tellerTransactionFeeType: boolean | null;
    version1: VersionType;
}