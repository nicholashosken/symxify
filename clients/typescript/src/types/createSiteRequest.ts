import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SiteFields_2 } from "./siteFields_2";
import { VersionType } from "./versionType";

export interface CreateSiteRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    siteFields: SiteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}