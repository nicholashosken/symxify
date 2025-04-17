import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CorpTransferSingleSelectableFields } from "./corpTransferSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CorpTransferSelectFieldsRequest {
    corpTransferGlobalSequenceDateValue: string;
    corpTransferGlobalSequenceDateValueSpecified: boolean;
    corpTransferGlobalSequenceDate: string | null;
    corpTransferGlobalSequenceValue: number;
    corpTransferGlobalSequenceValueSpecified: boolean;
    corpTransferGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CorpTransferSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}