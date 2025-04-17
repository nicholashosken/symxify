import { ItcInstallationFields } from "./itcInstallationFields";
import { VersionType } from "./versionType";

export interface ItcInstallationSingleSelectableFields {
    includeAllItcInstallationFields: boolean | null;
    itcInstallationFields: ItcInstallationFields;
    version1: VersionType;
}