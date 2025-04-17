import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CashLetterSingleSelectableFields } from "./cashLetterSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CashLetterSelectFieldsRequest {
    cashLetterGlobalSequenceDateValue: string;
    cashLetterGlobalSequenceDateValueSpecified: boolean;
    cashLetterGlobalSequenceDate: string | null;
    cashLetterGlobalSequenceValue: number;
    cashLetterGlobalSequenceValueSpecified: boolean;
    cashLetterGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CashLetterSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
