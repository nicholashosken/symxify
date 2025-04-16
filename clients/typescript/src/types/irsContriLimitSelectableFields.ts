import { IrsContriLimitFields } from "./irsContriLimitFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsContriLimitSelectableFields {
    includeAllIrsContriLimitFieldsValue: boolean;
    includeAllIrsContriLimitFieldsValueSpecified: boolean;
    includeAllIrsContriLimitFields: boolean | null;
    irsContriLimitFields: IrsContriLimitFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}