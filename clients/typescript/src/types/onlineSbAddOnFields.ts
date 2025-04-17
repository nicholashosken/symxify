import { VersionType } from "./versionType";

export interface OnlineSbAddOnFields {
    availBalApprExclList: boolean | null;
    availBalPostExclList: boolean | null;
    cardAcceptorLocation: boolean | null;
    cardAcceptorName: boolean | null;
    checkDepositHolds: boolean | null;
    customCriterion: boolean | null;
    depRestrictWarnList: boolean | null;
    glCode: boolean | null;
    lnExcludeTypeList: boolean | null;
    nonIrsCertTranAccess: boolean | null;
    nonIrsClubTranAccess: boolean | null;
    posConditionCodes: boolean | null;
    regDLimiting: boolean | null;
    restrictWarnList: boolean | null;
    ruleDescription: boolean | null;
    ruleOrdinal: boolean | null;
    rulePosition: boolean | null;
    svExcludeTypeList: boolean | null;
    transactionHistoryPrefix: boolean | null;
    transactionSourceCode: boolean | null;
    transactionSubType: boolean | null;
    wdRestrictWarnList: boolean | null;
    version1: VersionType;
}