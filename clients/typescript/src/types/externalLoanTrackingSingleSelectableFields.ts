import { ExternalLoanTrackingFields } from "./externalLoanTrackingFields";
import { VersionType } from "./versionType";

export interface ExternalLoanTrackingSingleSelectableFields {
    includeAllExternalLoanTrackingFields: boolean | null;
    externalLoanTrackingFields: ExternalLoanTrackingFields;
    version1: VersionType;
}