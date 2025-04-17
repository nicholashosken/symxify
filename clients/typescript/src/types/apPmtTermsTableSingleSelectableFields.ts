import { ApPmtTermsTableFields } from "./apPmtTermsTableFields";
import { VersionType } from "./versionType";

export interface ApPmtTermsTableSingleSelectableFields {
    includeAllApPmtTermsTableFields: boolean | null;
    apPmtTermsTableFields: ApPmtTermsTableFields;
    version1: VersionType;
}