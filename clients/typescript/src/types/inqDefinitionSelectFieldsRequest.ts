import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InqDefinitionSingleSelectableFields } from "./inqDefinitionSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InqDefinitionSelectFieldsRequest {
    inqDefinitionInquiryNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InqDefinitionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}