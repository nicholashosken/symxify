import { VersionType } from "./versionType";
export interface WdFeeFields {
    feeDescription: boolean | null;
    feeGlCode: boolean | null;
    relCodeList: number[];
    relationFeeAmount: number[];
    relationSourceCodeList: number[];
    relationWithdrawalLimit: number[];
    withdrawalFeeType: boolean | null;
    version1: VersionType;
}
