import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EscrowTypeFields_2 } from "./escrowTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateEscrowTypeByIdRequest {
    escrowTypeEscrowTypeValue: number;
    escrowTypeEscrowTypeValueSpecified: boolean;
    escrowTypeEscrowType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    escrowTypeFields: EscrowTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
