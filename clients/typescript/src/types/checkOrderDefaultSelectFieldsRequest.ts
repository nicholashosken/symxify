import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckOrderDefaultSingleSelectableFields } from "./checkOrderDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CheckOrderDefaultSelectFieldsRequest {
    checkOrderDefaultCheckOrderProcessorValue: number;
    checkOrderDefaultCheckOrderProcessorValueSpecified: boolean;
    checkOrderDefaultCheckOrderProcessor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CheckOrderDefaultSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}