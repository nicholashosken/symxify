import { BalancePrinterType } from "./balancePrinterType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CheckDisbursedReportType {
    firstPartyCountValue: number;
    firstPartyCountValueSpecified: boolean;
    firstPartyCount: number | null;
    firstPartyAmountValue: number;
    firstPartyAmountValueSpecified: boolean;
    firstPartyAmount: number | null;
    balancePrinter: BalancePrinterType[];
    balancePrinterSpecified: boolean;
    thirdPartyCountValue: number;
    thirdPartyCountValueSpecified: boolean;
    thirdPartyCount: number | null;
    thirdPartyAmountValue: number;
    thirdPartyAmountValueSpecified: boolean;
    thirdPartyAmount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
