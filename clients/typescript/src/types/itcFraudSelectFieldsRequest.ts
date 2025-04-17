import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ItcFraudSingleSelectableFields } from "./itcFraudSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ItcFraudSelectFieldsRequest {
    itcFraudItcFraudVendor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ItcFraudSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}