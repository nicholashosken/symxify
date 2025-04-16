import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InsTypeFields_2 } from "./insTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateInsTypeByIdRequest {
    insTypeInsuranceTypeValue: number;
    insTypeInsuranceTypeValueSpecified: boolean;
    insTypeInsuranceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    insTypeFields: InsTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
