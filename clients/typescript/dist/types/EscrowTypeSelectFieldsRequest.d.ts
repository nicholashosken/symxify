import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EscrowTypeSingleSelectableFields } from "./escrowTypeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EscrowTypeSelectFieldsRequest {
    escrowTypeEscrowTypeValue: number;
    escrowTypeEscrowTypeValueSpecified: boolean;
    escrowTypeEscrowType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EscrowTypeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
