import { DealerStatementClosedDealerMessage1_2 } from "./dealerStatementClosedDealerMessage1_2";
import { DealerStatementClosedDealerMessage2_2 } from "./dealerStatementClosedDealerMessage2_2";
import { DealerStatementInstitutionAddressLine_2 } from "./dealerStatementInstitutionAddressLine_2";
import { DealerStatementMessageLine1_2 } from "./dealerStatementMessageLine1_2";
import { DealerStatementMessageLine2_2 } from "./dealerStatementMessageLine2_2";
import { VersionType } from "./versionType";

export interface DealerStatement_2 {
    adjustments: string;
    chargebackAmount: string;
    closedDealerMessage1: DealerStatementClosedDealerMessage1_2[];
    closedDealerMessage2: DealerStatementClosedDealerMessage2_2[];
    dealerDormant: number | null;
    fees: string;
    format: number | null;
    holdbackAmount: string;
    inquiryLine: string;
    institutionAddressLine: DealerStatementInstitutionAddressLine_2[];
    messageLine1: DealerStatementMessageLine1_2[];
    messageLine2: DealerStatementMessageLine2_2[];
    negativeSignOption: number | null;
    numberoftimesGenerated: number | null;
    printDatesinHeader: boolean | null;
    printTransactionDates: boolean | null;
    printTransactionDetail: boolean | null;
    separateClosedDealer: boolean | null;
    statementCutoffDate: string | null;
    statementDates: string;
    statementGroupList: string;
    suppressDealerNumberZeros: boolean | null;
    totalDealerReserve: string;
    upfrontReserve: string;
    useCommas: boolean | null;
    useContactName: boolean | null;
    ytdTotalPrinting: boolean | null;
    version1: VersionType;
}