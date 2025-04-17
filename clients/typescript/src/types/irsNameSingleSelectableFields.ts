import { IrsNameFields } from "./irsNameFields";
import { VersionType } from "./versionType";

export interface IrsNameSingleSelectableFields {
    includeAllIrsNameFields: boolean | null;
    irsNameFields: IrsNameFields;
    version1: VersionType;
}