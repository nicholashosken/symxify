import { PositivePayFields } from "./positivePayFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PositivePaySelectableFields {
    includeAllPositivePayFieldsValue: boolean;
    includeAllPositivePayFieldsValueSpecified: boolean;
    includeAllPositivePayFields: boolean | null;
    positivePayFields: PositivePayFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
