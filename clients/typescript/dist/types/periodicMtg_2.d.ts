import { BitMap } from "./bitMap";
import { PeriodicMtgCollateralCodeList_2 } from "./periodicMtgCollateralCodeList_2";
import { PeriodicMtgLoanPurposeList_2 } from "./periodicMtgLoanPurposeList_2";
import { PeriodicMtgLoanTypeList_2 } from "./periodicMtgLoanTypeList_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PeriodicMtg_2 {
    amountDueNoteList: BitMap;
    collateralCodeList: PeriodicMtgCollateralCodeList_2[];
    collateralCodeListSpecified: boolean;
    dqNoticeNoteList: BitMap;
    explAmtDueNoteList: BitMap;
    foreclosureNoteList: BitMap;
    lateChargeWarningCodeValue: number;
    lateChargeWarningCodeValueSpecified: boolean;
    lateChargeWarningCode: number | null;
    loanInfoNoteList: BitMap;
    loanMsgsNoteList: BitMap;
    loanPurposeList: PeriodicMtgLoanPurposeList_2[];
    loanPurposeListSpecified: boolean;
    loanTypeList: PeriodicMtgLoanTypeList_2[];
    loanTypeListSpecified: boolean;
    lossMitNoteList: BitMap;
    pastPmtsNoteList: BitMap;
    transActNoteList: BitMap;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
