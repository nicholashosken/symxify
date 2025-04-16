import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTypeIdRangeFields {
    idRangeValue: boolean;
    idRangeValueSpecified: boolean;
    idRange: boolean | null;
    idRangeHighValue: boolean;
    idRangeHighValueSpecified: boolean;
    idRangeHigh: boolean | null;
    idRangeLowValue: boolean;
    idRangeLowValueSpecified: boolean;
    idRangeLow: boolean | null;
    loanTypeValue: boolean;
    loanTypeValueSpecified: boolean;
    loanType: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}