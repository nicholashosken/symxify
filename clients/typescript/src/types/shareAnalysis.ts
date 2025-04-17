import { ShareAnalysisCounter } from "./shareAnalysisCounter";
import { VersionType } from "./versionType";

export interface ShareAnalysis {
    cashAmtTotal: number | null;
    counter: ShareAnalysisCounter[];
    locator: number | null;
    plan: number | null;
    recordChangeDate: string | null;
    statementDate: string | null;
    statementGroup: number | null;
    statementPrevDate: string | null;
    version1: VersionType;
}