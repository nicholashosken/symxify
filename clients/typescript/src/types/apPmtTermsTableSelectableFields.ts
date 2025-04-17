import { ApPmtTermsTableFields } from "./apPmtTermsTableFields";
import { VersionType } from "./versionType";

export interface ApPmtTermsTableSelectableFields {
    includeAllApPmtTermsTableFields: boolean | null;
    apPmtTermsTableFields: ApPmtTermsTableFields;
    version1: VersionType;
}