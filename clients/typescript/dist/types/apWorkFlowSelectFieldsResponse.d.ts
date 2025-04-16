import { ApWorkFlow } from "./apWorkFlow";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ApWorkFlowSelectFieldsResponse {
    apWorkFlow: ApWorkFlow;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
