import { AnalysisFloat } from "./analysisFloat";
import { VersionType } from "./versionType";

export interface AnalysisFloatPagedListSelectFieldsResponse {
    analysisFloat: AnalysisFloat[];
    token: string;
    version1: VersionType;
    messageId: string;
}