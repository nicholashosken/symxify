import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpItemSingleSelectableFields } from "./excpItemSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpItemSelectFieldsRequest {
    excpItemGlobalSequenceDateValue: string;
    excpItemGlobalSequenceDateValueSpecified: boolean;
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequenceValue: number;
    excpItemGlobalSequenceValueSpecified: boolean;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpItemSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
