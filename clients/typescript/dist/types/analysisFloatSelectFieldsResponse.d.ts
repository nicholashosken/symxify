import { AnalysisFloat } from "./analysisFloat";
import { VersionType } from "./versionType";
export interface AnalysisFloatSelectFieldsResponse {
    analysisFloat: AnalysisFloat;
    version1: VersionType;
    messageId: string;
}
