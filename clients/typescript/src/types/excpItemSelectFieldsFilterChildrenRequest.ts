import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpItemSelectableFields } from "./excpItemSelectableFields";
import { ExcpItemChildrenFilter } from "./excpItemChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpItemSelectFieldsFilterChildrenRequest {
    excpItemGlobalSequenceDateValue: string;
    excpItemGlobalSequenceDateValueSpecified: boolean;
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequenceValue: number;
    excpItemGlobalSequenceValueSpecified: boolean;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpItemSelectableFields;
    childrenSearchFilter: ExcpItemChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}