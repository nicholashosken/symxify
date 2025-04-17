import { ExternalLoanNameFields } from "./externalLoanNameFields";
import { VersionType } from "./versionType";
export interface ExternalLoanNameSelectableFields {
    includeAllExternalLoanNameFields: boolean | null;
    externalLoanNameFields: ExternalLoanNameFields;
    version1: VersionType;
}
