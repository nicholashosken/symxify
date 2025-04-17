import { ItcInstallationFields } from "./itcInstallationFields";
import { VersionType } from "./versionType";
export interface ItcInstallationSelectableFields {
    includeAllItcInstallationFields: boolean | null;
    itcInstallationFields: ItcInstallationFields;
    version1: VersionType;
}
