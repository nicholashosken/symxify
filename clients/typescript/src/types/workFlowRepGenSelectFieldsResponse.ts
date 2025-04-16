import { WorkFlowRepGen } from "./workFlowRepGen";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WorkFlowRepGenSelectFieldsResponse {
    workFlowRepGen: WorkFlowRepGen;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}