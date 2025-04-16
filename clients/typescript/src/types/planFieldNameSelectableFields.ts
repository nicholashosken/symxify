import { PlanFieldNameFields } from "./planFieldNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PlanFieldNameSelectableFields {
    includeAllPlanFieldNameFieldsValue: boolean;
    includeAllPlanFieldNameFieldsValueSpecified: boolean;
    includeAllPlanFieldNameFields: boolean | null;
    planFieldNameFields: PlanFieldNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}