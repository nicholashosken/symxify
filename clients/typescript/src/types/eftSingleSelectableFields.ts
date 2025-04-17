import { EftFields } from "./eftFields";
import { VersionType } from "./versionType";

export interface EftSingleSelectableFields {
    includeAllEftFields: boolean | null;
    eftFields: EftFields;
    version1: VersionType;
}