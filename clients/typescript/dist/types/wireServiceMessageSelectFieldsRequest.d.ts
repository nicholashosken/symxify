import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireServiceMessageSingleSelectableFields } from "./wireServiceMessageSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireServiceMessageSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireServiceMessageLocatorValue: number;
    wireServiceMessageLocatorValueSpecified: boolean;
    wireServiceMessageLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireServiceMessageSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
