import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";

export interface OnlineSbi {
    allowWdForCashedCheck: boolean | null;
    availBalApprExclList: BitMap;
    availBalPostExclList: BitMap;
    depRestrictWarnCodeList: BitMap;
    feeDescription: string;
    jointNameTypes: BitMap;
    lnExcludeList: BitMap;
    mbrVfyInqSpPostOption: number | null;
    nonIrsCertTranAccess: boolean | null;
    nonIrsClubTranAccess: boolean | null;
    outputSccComments: number | null;
    payrollCheckHoldOption: number | null;
    postInquiries: boolean | null;
    postMemberVerifications: boolean | null;
    postSpecialPurchases: boolean | null;
    postStatements: boolean | null;
    regCcPolicy: number | null;
    restrictWarnCodeList: BitMap;
    svExcludeList: BitMap;
    wdRestrictWarnCodeList: BitMap;
    version1: VersionType;
}