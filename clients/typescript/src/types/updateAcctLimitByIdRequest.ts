import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctLimitFields_2 } from "./acctLimitFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateAcctLimitByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctLimitFields: AcctLimitFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}