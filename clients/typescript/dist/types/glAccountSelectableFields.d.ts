import { GlAccountFields } from "./glAccountFields";
import { GlAccountFmHistorySelectableFields } from "./glAccountFmHistorySelectableFields";
import { GlAccountTrackingSelectableFields } from "./glAccountTrackingSelectableFields";
import { GlHistorySelectableFields } from "./glHistorySelectableFields";
import { GlSubaccountSelectableFields } from "./glSubaccountSelectableFields";
import { VersionType } from "./versionType";
export interface GlAccountSelectableFields {
    includeAllGlAccountFields: boolean | null;
    glAccountFields: GlAccountFields;
    glAccountFmHistorySelectableFields: GlAccountFmHistorySelectableFields;
    glAccountTrackingSelectableFields: GlAccountTrackingSelectableFields;
    glHistorySelectableFields: GlHistorySelectableFields;
    glSubaccountSelectableFields: GlSubaccountSelectableFields;
    version1: VersionType;
}
