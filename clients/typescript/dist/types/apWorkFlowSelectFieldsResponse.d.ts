import { ApWorkFlow } from "./apWorkFlow";
import { VersionType } from "./versionType";
export interface ApWorkFlowSelectFieldsResponse {
    apWorkFlow: ApWorkFlow;
    version1: VersionType;
    messageId: string;
}
