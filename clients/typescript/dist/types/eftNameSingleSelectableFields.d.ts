import { EftNameFields } from "./eftNameFields";
import { VersionType } from "./versionType";
export interface EftNameSingleSelectableFields {
    includeAllEftNameFields: boolean | null;
    eftNameFields: EftNameFields;
    version1: VersionType;
}
