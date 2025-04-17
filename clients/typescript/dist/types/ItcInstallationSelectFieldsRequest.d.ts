import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ItcInstallationSingleSelectableFields } from "./itcInstallationSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ItcInstallationSelectFieldsRequest {
    itcInstallationItcInstallation: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ItcInstallationSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
