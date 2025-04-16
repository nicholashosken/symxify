import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ScreenDefinitionSingleSelectableFields } from "./screenDefinitionSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ScreenDefinitionSelectFieldsRequest {
    screenDefinitionScreenSelectionValue: number;
    screenDefinitionScreenSelectionValueSpecified: boolean;
    screenDefinitionScreenSelection: number | null;
    screenDefinitionTypeValue: number;
    screenDefinitionTypeValueSpecified: boolean;
    screenDefinitionType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ScreenDefinitionSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
