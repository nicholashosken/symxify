import { VersionType } from "./versionType";

export interface ShareAnalysisFields {
    cashAmtTotal: boolean | null;
    counter: number[];
    locator: boolean | null;
    plan: boolean | null;
    recordChangeDate: boolean | null;
    statementDate: boolean | null;
    statementGroup: boolean | null;
    statementPrevDate: boolean | null;
    version1: VersionType;
}