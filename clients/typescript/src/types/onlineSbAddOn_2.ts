import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";

export interface OnlineSbAddOn_2 {
    availBalApprExclList: BitMap;
    availBalPostExclList: BitMap;
    cardAcceptorLocation: string;
    cardAcceptorName: string;
    checkDepositHolds: number | null;
    customCriterion: number | null;
    depRestrictWarnList: BitMap;
    glCode: number | null;
    lnExcludeTypeList: BitMap;
    nonIrsCertTranAccess: boolean | null;
    nonIrsClubTranAccess: boolean | null;
    posConditionCodes: string;
    regDLimiting: boolean | null;
    restrictWarnList: BitMap;
    ruleDescription: string;
    ruleOrdinal: number | null;
    rulePosition: number | null;
    svExcludeTypeList: BitMap;
    transactionHistoryPrefix: string;
    transactionSourceCode: string;
    transactionSubType: number | null;
    wdRestrictWarnList: BitMap;
    version1: VersionType;
}