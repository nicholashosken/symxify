import { IrsContriLimitFields } from "./irsContriLimitFields";
import { VersionType } from "./versionType";

export interface IrsContriLimitSelectableFields {
    includeAllIrsContriLimitFields: boolean | null;
    irsContriLimitFields: IrsContriLimitFields;
    version1: VersionType;
}