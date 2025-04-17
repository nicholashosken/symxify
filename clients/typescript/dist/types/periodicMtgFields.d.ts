import { VersionType } from "./versionType";
export interface PeriodicMtgFields {
    amountDueNoteList: boolean | null;
    collateralCodeList: number[];
    dqNoticeNoteList: boolean | null;
    explAmtDueNoteList: boolean | null;
    foreclosureNoteList: boolean | null;
    lateChargeWarningCode: boolean | null;
    loanInfoNoteList: boolean | null;
    loanMsgsNoteList: boolean | null;
    loanPurposeList: number[];
    loanTypeList: number[];
    lossMitNoteList: boolean | null;
    pastPmtsNoteList: boolean | null;
    transActNoteList: boolean | null;
    version1: VersionType;
}
