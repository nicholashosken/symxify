import { ApWorkFlow } from "./apWorkFlow";
import { VersionType } from "./versionType";
export interface ApWorkFlowSearchPagedSelectFieldsResponse {
    apWorkFlow: ApWorkFlow[];
    token: string;
    version1: VersionType;
    messageId: string;
}
