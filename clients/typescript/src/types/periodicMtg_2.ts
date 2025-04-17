import { BitMap } from "./bitMap";
import { PeriodicMtgCollateralCodeList_2 } from "./periodicMtgCollateralCodeList_2";
import { PeriodicMtgLoanPurposeList_2 } from "./periodicMtgLoanPurposeList_2";
import { PeriodicMtgLoanTypeList_2 } from "./periodicMtgLoanTypeList_2";
import { VersionType } from "./versionType";

export interface PeriodicMtg_2 {
    amountDueNoteList: BitMap;
    collateralCodeList: PeriodicMtgCollateralCodeList_2[];
    dqNoticeNoteList: BitMap;
    explAmtDueNoteList: BitMap;
    foreclosureNoteList: BitMap;
    lateChargeWarningCode: number | null;
    loanInfoNoteList: BitMap;
    loanMsgsNoteList: BitMap;
    loanPurposeList: PeriodicMtgLoanPurposeList_2[];
    loanTypeList: PeriodicMtgLoanTypeList_2[];
    lossMitNoteList: BitMap;
    pastPmtsNoteList: BitMap;
    transActNoteList: BitMap;
    version1: VersionType;
}