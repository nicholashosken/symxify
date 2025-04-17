import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExtLoanSingleSelectableFields } from "./extLoanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExtLoanSelectFieldsRequest {
    extLoanProcessor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExtLoanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}