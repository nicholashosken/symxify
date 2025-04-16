import { ApWorkFlow } from "./apWorkFlow";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ApWorkFlowSearchPagedSelectFieldsResponse {
    apWorkFlow: ApWorkFlow[];
    apWorkFlowSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
