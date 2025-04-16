import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InqDefinitionSingleSelectableFields } from "./inqDefinitionSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InqDefinitionSelectFieldsRequest {
    inqDefinitionInquiryNumberValue: number;
    inqDefinitionInquiryNumberValueSpecified: boolean;
    inqDefinitionInquiryNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InqDefinitionSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
