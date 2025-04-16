import { BitMap } from "./bitMap";
import { PeriodicMtgCollateralCodeList } from "./periodicMtgCollateralCodeList";
import { PeriodicMtgLoanPurposeList } from "./periodicMtgLoanPurposeList";
import { PeriodicMtgLoanTypeList } from "./periodicMtgLoanTypeList";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PeriodicMtg {
    amountDueNoteList: BitMap;
    collateralCodeList: PeriodicMtgCollateralCodeList[];
    collateralCodeListSpecified: boolean;
    dqNoticeNoteList: BitMap;
    explAmtDueNoteList: BitMap;
    foreclosureNoteList: BitMap;
    lateChargeWarningCodeValue: number;
    lateChargeWarningCodeValueSpecified: boolean;
    lateChargeWarningCode: number | null;
    loanInfoNoteList: BitMap;
    loanMsgsNoteList: BitMap;
    loanPurposeList: PeriodicMtgLoanPurposeList[];
    loanPurposeListSpecified: boolean;
    loanTypeList: PeriodicMtgLoanTypeList[];
    loanTypeListSpecified: boolean;
    lossMitNoteList: BitMap;
    pastPmtsNoteList: BitMap;
    transActNoteList: BitMap;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
