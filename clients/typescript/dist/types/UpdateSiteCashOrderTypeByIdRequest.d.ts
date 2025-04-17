import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SiteCashOrderTypeFields_2 } from "./siteCashOrderTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateSiteCashOrderTypeByIdRequest {
    accountNumber: string;
    siteLocator: number | null;
    siteCashOrderTypeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    siteCashOrderTypeFields: SiteCashOrderTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
