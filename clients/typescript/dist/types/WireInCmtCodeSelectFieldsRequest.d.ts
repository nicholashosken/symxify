import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireInCmtCodeSingleSelectableFields } from "./wireInCmtCodeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireInCmtCodeSelectFieldsRequest {
    wireInCmtCodeSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireInCmtCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
