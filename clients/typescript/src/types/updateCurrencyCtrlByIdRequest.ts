import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CurrencyCtrlFields_2 } from "./currencyCtrlFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCurrencyCtrlByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    currencyCtrlFields: CurrencyCtrlFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}