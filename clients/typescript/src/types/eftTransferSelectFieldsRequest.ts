import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftTransferSingleSelectableFields } from "./eftTransferSingleSelectableFields";
import { VersionType } from "./versionType";

export interface EftTransferSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    eftTransferLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EftTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}