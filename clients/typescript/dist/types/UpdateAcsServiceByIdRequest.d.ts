import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcsServiceFields_2 } from "./acsServiceFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateAcsServiceByIdRequest {
    acsServiceAcsServiceTypeValue: number;
    acsServiceAcsServiceTypeValueSpecified: boolean;
    acsServiceAcsServiceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acsServiceFields: AcsServiceFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
