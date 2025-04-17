import { BalanceDispenserType } from "./balanceDispenserType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CashValueReportType {
    balanceDispenser: BalanceDispenserType[];
    balanceDispenserSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}