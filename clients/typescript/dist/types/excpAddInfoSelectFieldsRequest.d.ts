import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpAddInfoSingleSelectableFields } from "./excpAddInfoSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpAddInfoSelectFieldsRequest {
    excpItemGlobalSequenceDateValue: string;
    excpItemGlobalSequenceDateValueSpecified: boolean;
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequenceValue: number;
    excpItemGlobalSequenceValueSpecified: boolean;
    excpItemGlobalSequence: number | null;
    excpAddInfoLocatorValue: number;
    excpAddInfoLocatorValueSpecified: boolean;
    excpAddInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpAddInfoSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
