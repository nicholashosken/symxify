import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctTypeNameFields_2 } from "./acctTypeNameFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateAcctTypeNameByIdRequest {
    acctTypeNameAcctTypeValue: number;
    acctTypeNameAcctTypeValueSpecified: boolean;
    acctTypeNameAcctType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctTypeNameFields: AcctTypeNameFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
