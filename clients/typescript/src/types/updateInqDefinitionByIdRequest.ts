import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InqDefinitionFields_2 } from "./inqDefinitionFields_2";
import { VersionType } from "./versionType";

export interface UpdateInqDefinitionByIdRequest {
    inqDefinitionInquiryNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inqDefinitionFields: InqDefinitionFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}