import { ApWorkFlowFields } from "./apWorkFlowFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApWorkFlowSingleSelectableFields {
    includeAllApWorkFlowFieldsValue: boolean;
    includeAllApWorkFlowFieldsValueSpecified: boolean;
    includeAllApWorkFlowFields: boolean | null;
    apWorkFlowFields: ApWorkFlowFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}