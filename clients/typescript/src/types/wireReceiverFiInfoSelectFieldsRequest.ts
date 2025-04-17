import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireReceiverFiInfoSingleSelectableFields } from "./wireReceiverFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireReceiverFiInfoSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireReceiverFiInfoLocatorValue: number;
    wireReceiverFiInfoLocatorValueSpecified: boolean;
    wireReceiverFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireReceiverFiInfoSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}