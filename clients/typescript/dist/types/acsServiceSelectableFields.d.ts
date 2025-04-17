import { AcsServiceFields } from "./acsServiceFields";
import { VersionType } from "./versionType";
export interface AcsServiceSelectableFields {
    includeAllAcsServiceFields: boolean | null;
    acsServiceFields: AcsServiceFields;
    version1: VersionType;
}
