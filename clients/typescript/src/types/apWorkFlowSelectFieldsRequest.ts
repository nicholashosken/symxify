import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ApWorkFlowSingleSelectableFields } from "./apWorkFlowSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ApWorkFlowSelectFieldsRequest {
    apWorkFlowApInvoiceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ApWorkFlowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}