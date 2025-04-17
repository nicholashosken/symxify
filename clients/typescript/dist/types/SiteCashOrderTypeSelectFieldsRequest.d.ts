import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SiteCashOrderTypeSingleSelectableFields } from "./siteCashOrderTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface SiteCashOrderTypeSelectFieldsRequest {
    accountNumber: string;
    siteLocator: number | null;
    siteCashOrderTypeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SiteCashOrderTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
