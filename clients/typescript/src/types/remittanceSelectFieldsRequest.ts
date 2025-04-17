import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { RemittanceSingleSelectableFields } from "./remittanceSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface RemittanceSelectFieldsRequest {
    remittanceGlobalSequenceDateValue: string;
    remittanceGlobalSequenceDateValueSpecified: boolean;
    remittanceGlobalSequenceDate: string | null;
    remittanceGlobalSequenceValue: number;
    remittanceGlobalSequenceValueSpecified: boolean;
    remittanceGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: RemittanceSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}