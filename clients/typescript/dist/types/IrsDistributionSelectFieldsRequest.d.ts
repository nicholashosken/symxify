import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsDistributionSingleSelectableFields } from "./irsDistributionSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IrsDistributionSelectFieldsRequest {
    accountNumber: string;
    irsLocator: number | null;
    irsDistributionLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IrsDistributionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
