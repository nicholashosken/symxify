import { GlAccountFmHistoryFields } from "./glAccountFmHistoryFields";
import { VersionType } from "./versionType";

export interface GlAccountFmHistorySelectableFields {
    includeAllGlAccountFmHistoryFields: boolean | null;
    glAccountFmHistoryFields: GlAccountFmHistoryFields;
    version1: VersionType;
}