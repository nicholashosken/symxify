import { IrsFields } from "./irsFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsSingleSelectableFields {
    includeAllIrsFieldsValue: boolean;
    includeAllIrsFieldsValueSpecified: boolean;
    includeAllIrsFields: boolean | null;
    irsFields: IrsFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}