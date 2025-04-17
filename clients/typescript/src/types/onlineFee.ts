import { BitMap } from "./bitMap";
import { OnlineFeeRelationFeeAmount } from "./onlineFeeRelationFeeAmount";
import { OnlineFeeRelationRelCodes } from "./onlineFeeRelationRelCodes";
import { OnlineFeeRelationWaiveCount } from "./onlineFeeRelationWaiveCount";
import { VersionType } from "./versionType";

export interface OnlineFee {
    accountTypes: BitMap;
    acquirerNetworkIds: string;
    cardAcceptorName: string;
    cardTypes: BitMap;
    coOpTransaction: number | null;
    customCriterion: number | null;
    excludeServiceCodes: BitMap;
    feeCountLevel: number | null;
    feeCountNumber: number | null;
    feeCountTotals: number | null;
    feeDescription: string;
    feeGlCode: number | null;
    feePostingOption: number | null;
    includeServiceCodes: BitMap;
    relationFeeAmount: OnlineFeeRelationFeeAmount[];
    relationRelCodes: OnlineFeeRelationRelCodes[];
    relationWaiveCount: OnlineFeeRelationWaiveCount[];
    ruleDescription: string;
    ruleOrdinal: number | null;
    rulePosition: number | null;
    shareLoan: number | null;
    shareLoanTypes: BitMap;
    terminalTable: number | null;
    transactionCodes: string;
    transactionTypes: string;
    warningCodeExclList: BitMap;
    warningCodeInclList: BitMap;
    version1: VersionType;
}