import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CdmSingleSelectableFields } from "./cdmSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CdmSelectFieldsRequest {
    cdmCdm: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CdmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
