import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CreditReportSingleSelectableFields } from "./creditReportSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CreditReportSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CreditReportSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}