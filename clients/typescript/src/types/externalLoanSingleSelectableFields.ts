import { ExternalLoanFields } from "./externalLoanFields";
import { VersionType } from "./versionType";

export interface ExternalLoanSingleSelectableFields {
    includeAllExternalLoanFields: boolean | null;
    externalLoanFields: ExternalLoanFields;
    version1: VersionType;
}