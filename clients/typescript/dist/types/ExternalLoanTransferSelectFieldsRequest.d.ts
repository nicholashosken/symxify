import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanTransferSingleSelectableFields } from "./externalLoanTransferSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalLoanTransferSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    externalLoanTransferLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalLoanTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
