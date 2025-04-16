import { WorkFlowRepGen } from "./workFlowRepGen";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WorkFlowRepGenSearchPagedSelectFieldsResponse {
    workFlowRepGen: WorkFlowRepGen[];
    workFlowRepGenSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}