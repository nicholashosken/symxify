import { VersionType } from "./versionType";

export interface DealerStatementFields {
    adjustments: boolean | null;
    chargebackAmount: boolean | null;
    closedDealerMessage1: number[];
    closedDealerMessage2: number[];
    dealerDormant: boolean | null;
    fees: boolean | null;
    format: boolean | null;
    holdbackAmount: boolean | null;
    inquiryLine: boolean | null;
    institutionAddressLine: number[];
    messageLine1: number[];
    messageLine2: number[];
    negativeSignOption: boolean | null;
    numberoftimesGenerated: boolean | null;
    printDatesinHeader: boolean | null;
    printTransactionDates: boolean | null;
    printTransactionDetail: boolean | null;
    separateClosedDealer: boolean | null;
    statementCutoffDate: boolean | null;
    statementDates: boolean | null;
    statementGroupList: boolean | null;
    suppressDealerNumberZeros: boolean | null;
    totalDealerReserve: boolean | null;
    upfrontReserve: boolean | null;
    useCommas: boolean | null;
    useContactName: boolean | null;
    ytdTotalPrinting: boolean | null;
    version1: VersionType;
}