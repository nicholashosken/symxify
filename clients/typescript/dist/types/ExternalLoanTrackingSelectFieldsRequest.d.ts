import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanTrackingSingleSelectableFields } from "./externalLoanTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalLoanTrackingSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    externalLoanTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalLoanTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
