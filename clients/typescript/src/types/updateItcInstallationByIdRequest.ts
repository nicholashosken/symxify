import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ItcInstallationFields_2 } from "./itcInstallationFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateItcInstallationByIdRequest {
    itcInstallationItcInstallationValue: number;
    itcInstallationItcInstallationValueSpecified: boolean;
    itcInstallationItcInstallation: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    itcInstallationFields: ItcInstallationFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}