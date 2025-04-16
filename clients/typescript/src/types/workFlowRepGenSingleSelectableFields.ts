import { WorkFlowRepGenFields } from "./workFlowRepGenFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WorkFlowRepGenSingleSelectableFields {
    includeAllWorkFlowRepGenFieldsValue: boolean;
    includeAllWorkFlowRepGenFieldsValueSpecified: boolean;
    includeAllWorkFlowRepGenFields: boolean | null;
    workFlowRepGenFields: WorkFlowRepGenFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}