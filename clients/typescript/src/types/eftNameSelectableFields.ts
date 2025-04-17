import { EftNameFields } from "./eftNameFields";
import { VersionType } from "./versionType";

export interface EftNameSelectableFields {
    includeAllEftNameFields: boolean | null;
    eftNameFields: EftNameFields;
    version1: VersionType;
}