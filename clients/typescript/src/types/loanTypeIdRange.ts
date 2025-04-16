import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTypeIdRange {
    idRangeValue: number;
    idRangeValueSpecified: boolean;
    idRange: number | null;
    idRangeHighValue: number;
    idRangeHighValueSpecified: boolean;
    idRangeHigh: number | null;
    idRangeLowValue: number;
    idRangeLowValueSpecified: boolean;
    idRangeLow: number | null;
    loanTypeValue: number;
    loanTypeValueSpecified: boolean;
    loanType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}