import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { RemittanceFields_2 } from "./remittanceFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CreateRemittanceRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    remittanceFields: RemittanceFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}