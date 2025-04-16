import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctRelCodeDescFields_2 } from "./acctRelCodeDescFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateAcctRelCodeDescByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctRelCodeDescFields: AcctRelCodeDescFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
