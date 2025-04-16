import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbAddOnFields_2 } from "./onlineSbAddOnFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateOnlineSbAddOnByIdRequest {
    onlineSbAddOnRuleOrdinalValue: number;
    onlineSbAddOnRuleOrdinalValueSpecified: boolean;
    onlineSbAddOnRuleOrdinal: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineSbAddOnFields: OnlineSbAddOnFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}