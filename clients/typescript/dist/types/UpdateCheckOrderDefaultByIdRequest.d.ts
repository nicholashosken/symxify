import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckOrderDefaultFields_2 } from "./checkOrderDefaultFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateCheckOrderDefaultByIdRequest {
    checkOrderDefaultCheckOrderProcessorValue: number;
    checkOrderDefaultCheckOrderProcessorValueSpecified: boolean;
    checkOrderDefaultCheckOrderProcessor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    checkOrderDefaultFields: CheckOrderDefaultFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
