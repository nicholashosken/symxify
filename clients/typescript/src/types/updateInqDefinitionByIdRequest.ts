import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InqDefinitionFields_2 } from "./inqDefinitionFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateInqDefinitionByIdRequest {
    inqDefinitionInquiryNumberValue: number;
    inqDefinitionInquiryNumberValueSpecified: boolean;
    inqDefinitionInquiryNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inqDefinitionFields: InqDefinitionFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}