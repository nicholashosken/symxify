import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ApWorkFlowFields_2 } from "./apWorkFlowFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateApWorkFlowByIdRequest {
    apWorkFlowApInvoiceTypeValue: number;
    apWorkFlowApInvoiceTypeValueSpecified: boolean;
    apWorkFlowApInvoiceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    apWorkFlowFields: ApWorkFlowFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}