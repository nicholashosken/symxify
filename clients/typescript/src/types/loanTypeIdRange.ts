import { VersionType } from "./versionType";

export interface LoanTypeIdRange {
    idRange: number | null;
    idRangeHigh: number | null;
    idRangeLow: number | null;
    loanType: number | null;
    version1: VersionType;
}