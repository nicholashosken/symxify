import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PmtAppMethodFields_2 } from "./pmtAppMethodFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdatePmtAppMethodByIdRequest {
    pmtAppMethodTypeValue: number;
    pmtAppMethodTypeValueSpecified: boolean;
    pmtAppMethodType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pmtAppMethodFields: PmtAppMethodFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}