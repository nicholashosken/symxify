import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ScreenDefinitionFields_2 } from "./screenDefinitionFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateScreenDefinitionByIdRequest {
    screenDefinitionScreenSelectionValue: number;
    screenDefinitionScreenSelectionValueSpecified: boolean;
    screenDefinitionScreenSelection: number | null;
    screenDefinitionTypeValue: number;
    screenDefinitionTypeValueSpecified: boolean;
    screenDefinitionType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    screenDefinitionFields: ScreenDefinitionFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}