import { BitMap } from "./bitMap";
import { PeriodicMtgCollateralCodeList } from "./periodicMtgCollateralCodeList";
import { PeriodicMtgLoanPurposeList } from "./periodicMtgLoanPurposeList";
import { PeriodicMtgLoanTypeList } from "./periodicMtgLoanTypeList";
import { VersionType } from "./versionType";

export interface PeriodicMtg {
    amountDueNoteList: BitMap;
    collateralCodeList: PeriodicMtgCollateralCodeList[];
    dqNoticeNoteList: BitMap;
    explAmtDueNoteList: BitMap;
    foreclosureNoteList: BitMap;
    lateChargeWarningCode: number | null;
    loanInfoNoteList: BitMap;
    loanMsgsNoteList: BitMap;
    loanPurposeList: PeriodicMtgLoanPurposeList[];
    loanTypeList: PeriodicMtgLoanTypeList[];
    lossMitNoteList: BitMap;
    pastPmtsNoteList: BitMap;
    transActNoteList: BitMap;
    version1: VersionType;
}