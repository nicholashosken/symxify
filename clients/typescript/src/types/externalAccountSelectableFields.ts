import { ExternalAccountFields } from "./externalAccountFields";
import { VersionType } from "./versionType";

export interface ExternalAccountSelectableFields {
    includeAllExternalAccountFields: boolean | null;
    externalAccountFields: ExternalAccountFields;
    version1: VersionType;
}