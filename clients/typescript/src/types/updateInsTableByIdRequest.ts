import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InsTableFields_2 } from "./insTableFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateInsTableByIdRequest {
    insTableInsuranceTableValue: number;
    insTableInsuranceTableValueSpecified: boolean;
    insTableInsuranceTable: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    insTableFields: InsTableFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}