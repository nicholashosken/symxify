import { AnalysisPlan } from "./analysisPlan";
import { VersionType } from "./versionType";
export interface AnalysisPlanPagedListSelectFieldsResponse {
    analysisPlan: AnalysisPlan[];
    token: string;
    version1: VersionType;
    messageId: string;
}
