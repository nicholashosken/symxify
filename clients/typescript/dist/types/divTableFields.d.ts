import { VersionType } from "./versionType";
export interface DivTableFields {
    balanceCutoff: number[];
    collectedBalMaxHoldDays: boolean | null;
    compounding: boolean | null;
    definedCode: boolean | null;
    divIndexTableOption: boolean | null;
    fillInRateMethod: boolean | null;
    frequency: boolean | null;
    increment: boolean | null;
    lrbGraceDays: number[];
    marginRate: number[];
    method: boolean | null;
    minDailyBalance: boolean | null;
    minimumBalance: boolean | null;
    newAccountCode: boolean | null;
    paymentCode: boolean | null;
    postAverageBalanceComment: boolean | null;
    rate: number[];
    rateSelection: boolean | null;
    relCodeList: number[];
    scheduleType: boolean | null;
    table: number[];
    type: boolean | null;
    version1: VersionType;
}
