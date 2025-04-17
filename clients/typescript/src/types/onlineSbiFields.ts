import { VersionType } from "./versionType";

export interface OnlineSbiFields {
    allowWdForCashedCheck: boolean | null;
    availBalApprExclList: boolean | null;
    availBalPostExclList: boolean | null;
    depRestrictWarnCodeList: boolean | null;
    feeDescription: boolean | null;
    jointNameTypes: boolean | null;
    lnExcludeList: boolean | null;
    mbrVfyInqSpPostOption: boolean | null;
    nonIrsCertTranAccess: boolean | null;
    nonIrsClubTranAccess: boolean | null;
    outputSccComments: boolean | null;
    payrollCheckHoldOption: boolean | null;
    postInquiries: boolean | null;
    postMemberVerifications: boolean | null;
    postSpecialPurchases: boolean | null;
    postStatements: boolean | null;
    regCcPolicy: boolean | null;
    restrictWarnCodeList: boolean | null;
    svExcludeList: boolean | null;
    wdRestrictWarnCodeList: boolean | null;
    version1: VersionType;
}