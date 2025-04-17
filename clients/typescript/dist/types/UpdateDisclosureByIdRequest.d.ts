import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DisclosureFields_2 } from "./disclosureFields_2";
import { VersionType } from "./versionType";
export interface UpdateDisclosureByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    disclosureFields: DisclosureFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
