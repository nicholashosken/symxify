import { IrsBkupWithholdFields } from "./irsBkupWithholdFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsBkupWithholdSelectableFields {
    includeAllIrsBkupWithholdFieldsValue: boolean;
    includeAllIrsBkupWithholdFieldsValueSpecified: boolean;
    includeAllIrsBkupWithholdFields: boolean | null;
    irsBkupWithholdFields: IrsBkupWithholdFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}