import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LookupTypeNameSingleSelectableFields } from "./lookupTypeNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LookupTypeNameSelectFieldsRequest {
    lookupTypeNameLookupType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LookupTypeNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
