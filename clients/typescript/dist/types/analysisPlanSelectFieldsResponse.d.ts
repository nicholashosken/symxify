import { AnalysisPlan } from "./analysisPlan";
import { VersionType } from "./versionType";
export interface AnalysisPlanSelectFieldsResponse {
    analysisPlan: AnalysisPlan;
    version1: VersionType;
    messageId: string;
}
