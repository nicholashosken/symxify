import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ItcInstallationSingleSelectableFields } from "./itcInstallationSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ItcInstallationSelectFieldsRequest {
    itcInstallationItcInstallationValue: number;
    itcInstallationItcInstallationValueSpecified: boolean;
    itcInstallationItcInstallation: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ItcInstallationSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}