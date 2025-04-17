import { IrsBkupWithholdFields } from "./irsBkupWithholdFields";
import { VersionType } from "./versionType";

export interface IrsBkupWithholdSelectableFields {
    includeAllIrsBkupWithholdFields: boolean | null;
    irsBkupWithholdFields: IrsBkupWithholdFields;
    version1: VersionType;
}