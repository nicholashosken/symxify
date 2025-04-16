import { CashAmount } from "./cashAmount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AmountInfo {
    totalAmountValue: number;
    totalAmountValueSpecified: boolean;
    totalAmount: number | null;
    checkAmountValue: number;
    checkAmountValueSpecified: boolean;
    checkAmount: number | null;
    cashAmount: CashAmount;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}