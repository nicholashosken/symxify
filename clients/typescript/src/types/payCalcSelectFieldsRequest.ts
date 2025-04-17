import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PayCalcSingleSelectableFields } from "./payCalcSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PayCalcSelectFieldsRequest {
    payCalcPaymentCalculationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PayCalcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}