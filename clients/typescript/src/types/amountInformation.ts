import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AmountInformation {
    totalAmountValue: number;
    totalAmountValueSpecified: boolean;
    totalAmount: number | null;
    checkAmountValue: number;
    checkAmountValueSpecified: boolean;
    checkAmount: number | null;
    cashAmountValue: number;
    cashAmountValueSpecified: boolean;
    cashAmount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}