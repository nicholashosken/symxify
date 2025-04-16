import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ApWorkFlowSingleSelectableFields } from "./apWorkFlowSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ApWorkFlowSelectFieldsRequest {
    apWorkFlowApInvoiceTypeValue: number;
    apWorkFlowApInvoiceTypeValueSpecified: boolean;
    apWorkFlowApInvoiceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ApWorkFlowSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
