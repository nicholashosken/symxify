import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SiteSingleSelectableFields } from "./siteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface SiteSelectFieldsRequest {
    accountNumber: string;
    siteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SiteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
