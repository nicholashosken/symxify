import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { BatchRcFields_2 } from "./batchRcFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateBatchRcByIdRequest {
    batchRcBatchReturnCodeValue: number;
    batchRcBatchReturnCodeValueSpecified: boolean;
    batchRcBatchReturnCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    batchRcFields: BatchRcFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}