import { AnalysisGlobal } from "./analysisGlobal";
import { VersionType } from "./versionType";
export interface AnalysisGlobalSelectFieldsResponse {
    analysisGlobal: AnalysisGlobal;
    version1: VersionType;
    messageId: string;
}
