import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReservePlanLoanSingleSelectableFields } from "./reservePlanLoanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ReservePlanLoanSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    reservePlanLoanLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReservePlanLoanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}