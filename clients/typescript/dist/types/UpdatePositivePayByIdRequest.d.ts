import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PositivePayFields_2 } from "./positivePayFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdatePositivePayByIdRequest {
    positivePayVendorIndexValue: number;
    positivePayVendorIndexValueSpecified: boolean;
    positivePayVendorIndex: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    positivePayFields: PositivePayFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
