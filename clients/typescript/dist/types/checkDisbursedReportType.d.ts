import { BalancePrinterType } from "./balancePrinterType";
import { VersionType } from "./versionType";
export interface CheckDisbursedReportType {
    firstPartyCount: number | null;
    firstPartyAmount: number | null;
    balancePrinter: BalancePrinterType[];
    thirdPartyCount: number | null;
    thirdPartyAmount: number | null;
    version1: VersionType;
}
