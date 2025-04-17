import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsSingleSelectableFields } from "./irsSingleSelectableFields";
import { VersionType } from "./versionType";

export interface IrsSelectFieldsRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IrsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}