import { ExternalLoanTransferFields } from "./externalLoanTransferFields";
import { VersionType } from "./versionType";
export interface ExternalLoanTransferSelectableFields {
    includeAllExternalLoanTransferFields: boolean | null;
    externalLoanTransferFields: ExternalLoanTransferFields;
    version1: VersionType;
}
