import { AcsServiceFields } from "./acsServiceFields";
import { VersionType } from "./versionType";
export interface AcsServiceSingleSelectableFields {
    includeAllAcsServiceFields: boolean | null;
    acsServiceFields: AcsServiceFields;
    version1: VersionType;
}
