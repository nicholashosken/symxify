import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireOutCmtCodeSingleSelectableFields } from "./wireOutCmtCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireOutCmtCodeSelectFieldsRequest {
    wireOutCmtCodeSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireOutCmtCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}