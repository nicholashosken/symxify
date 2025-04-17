import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardSingleSelectableFields } from "./cpWorkCardSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CpWorkCardSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CpWorkCardSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}