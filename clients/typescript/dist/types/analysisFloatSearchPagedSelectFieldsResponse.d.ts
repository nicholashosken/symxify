import { AnalysisFloat } from "./analysisFloat";
import { VersionType } from "./versionType";
export interface AnalysisFloatSearchPagedSelectFieldsResponse {
    analysisFloat: AnalysisFloat[];
    token: string;
    version1: VersionType;
    messageId: string;
}
