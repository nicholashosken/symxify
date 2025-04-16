import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbAddOnSingleSelectableFields } from "./onlineSbAddOnSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineSbAddOnSelectFieldsRequest {
    onlineSbAddOnRuleOrdinalValue: number;
    onlineSbAddOnRuleOrdinalValueSpecified: boolean;
    onlineSbAddOnRuleOrdinal: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineSbAddOnSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}