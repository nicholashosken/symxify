import { IrsFields } from "./irsFields";
import { VersionType } from "./versionType";

export interface IrsSingleSelectableFields {
    includeAllIrsFields: boolean | null;
    irsFields: IrsFields;
    version1: VersionType;
}