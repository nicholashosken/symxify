import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ApWorkFlowFields_2 } from "./apWorkFlowFields_2";
import { VersionType } from "./versionType";
export interface UpdateApWorkFlowByIdRequest {
    apWorkFlowApInvoiceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    apWorkFlowFields: ApWorkFlowFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
