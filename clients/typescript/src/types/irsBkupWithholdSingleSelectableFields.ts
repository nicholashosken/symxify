import { IrsBkupWithholdFields } from "./irsBkupWithholdFields";
import { VersionType } from "./versionType";

export interface IrsBkupWithholdSingleSelectableFields {
    includeAllIrsBkupWithholdFields: boolean | null;
    irsBkupWithholdFields: IrsBkupWithholdFields;
    version1: VersionType;
}