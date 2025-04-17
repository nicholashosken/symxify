import { ShareAnalysisCounter_2 } from "./shareAnalysisCounter_2";
import { VersionType } from "./versionType";

export interface ShareAnalysis_2 {
    cashAmtTotal: number | null;
    counter: ShareAnalysisCounter_2[];
    locator: number | null;
    plan: number | null;
    recordChangeDate: string | null;
    statementDate: string | null;
    statementGroup: number | null;
    statementPrevDate: string | null;
    version1: VersionType;
}