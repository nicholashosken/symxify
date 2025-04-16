import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WorkFlowRepGenFields_2 } from "./workFlowRepGenFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateWorkFlowRepGenByIdRequest {
    workFlowRepGenSpecfileValue: number;
    workFlowRepGenSpecfileValueSpecified: boolean;
    workFlowRepGenSpecfile: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    workFlowRepGenFields: WorkFlowRepGenFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}