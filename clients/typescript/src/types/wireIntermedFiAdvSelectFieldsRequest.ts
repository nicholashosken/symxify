import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireIntermedFiAdvSingleSelectableFields } from "./wireIntermedFiAdvSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireIntermedFiAdvSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireIntermedFiAdvLocatorValue: number;
    wireIntermedFiAdvLocatorValueSpecified: boolean;
    wireIntermedFiAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireIntermedFiAdvSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}