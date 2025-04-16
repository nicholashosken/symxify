import { IrsNameFields } from "./irsNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IrsNameSelectableFields {
    includeAllIrsNameFieldsValue: boolean;
    includeAllIrsNameFieldsValueSpecified: boolean;
    includeAllIrsNameFields: boolean | null;
    irsNameFields: IrsNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
