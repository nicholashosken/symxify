import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PmtAppMethodSingleSelectableFields } from "./pmtAppMethodSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PmtAppMethodSelectFieldsRequest {
    pmtAppMethodType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PmtAppMethodSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}