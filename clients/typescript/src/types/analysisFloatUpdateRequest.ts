import { AnalysisFloatFields_2 } from "./analysisFloatFields_2";

export interface AnalysisFloatUpdateRequest {
    analysisFloatBranchValue: number;
    analysisFloatBranchValueSpecified: boolean;
    analysisFloatBranch: number | null;
    analysisFloatFields: AnalysisFloatFields_2;
}