import { DivTableBalanceCutoff_2 } from "./divTableBalanceCutoff_2";
import { DivTableLrbGraceDays_2 } from "./divTableLrbGraceDays_2";
import { DivTableMarginRate_2 } from "./divTableMarginRate_2";
import { DivTableRate_2 } from "./divTableRate_2";
import { DivTableRelCodeList_2 } from "./divTableRelCodeList_2";
import { DivTableTable_2 } from "./divTableTable_2";
import { VersionType } from "./versionType";

export interface DivTable_2 {
    balanceCutoff: DivTableBalanceCutoff_2[];
    collectedBalMaxHoldDays: number | null;
    compounding: number | null;
    definedCode: number | null;
    divIndexTableOption: number | null;
    fillInRateMethod: number | null;
    frequency: number | null;
    increment: number | null;
    lrbGraceDays: DivTableLrbGraceDays_2[];
    marginRate: DivTableMarginRate_2[];
    method: number | null;
    minDailyBalance: number | null;
    minimumBalance: number | null;
    newAccountCode: number | null;
    paymentCode: number | null;
    postAverageBalanceComment: boolean | null;
    rate: DivTableRate_2[];
    rateSelection: number | null;
    relCodeList: DivTableRelCodeList_2[];
    scheduleType: number | null;
    table: DivTableTable_2[];
    type: number | null;
    version1: VersionType;
}