import { VersionType } from "./versionType";

export interface OnlineFeeFields {
    accountTypes: boolean | null;
    acquirerNetworkIds: boolean | null;
    cardAcceptorName: boolean | null;
    cardTypes: boolean | null;
    coOpTransaction: boolean | null;
    customCriterion: boolean | null;
    excludeServiceCodes: boolean | null;
    feeCountLevel: boolean | null;
    feeCountNumber: boolean | null;
    feeCountTotals: boolean | null;
    feeDescription: boolean | null;
    feeGlCode: boolean | null;
    feePostingOption: boolean | null;
    includeServiceCodes: boolean | null;
    relationFeeAmount: number[];
    relationRelCodes: number[];
    relationWaiveCount: number[];
    ruleDescription: boolean | null;
    ruleOrdinal: boolean | null;
    rulePosition: boolean | null;
    shareLoan: boolean | null;
    shareLoanTypes: boolean | null;
    terminalTable: boolean | null;
    transactionCodes: boolean | null;
    transactionTypes: boolean | null;
    warningCodeExclList: boolean | null;
    warningCodeInclList: boolean | null;
    version1: VersionType;
}