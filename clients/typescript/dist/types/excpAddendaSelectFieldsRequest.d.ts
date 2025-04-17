import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpAddendaSingleSelectableFields } from "./excpAddendaSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpAddendaSelectFieldsRequest {
    excpItemGlobalSequenceDateValue: string;
    excpItemGlobalSequenceDateValueSpecified: boolean;
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequenceValue: number;
    excpItemGlobalSequenceValueSpecified: boolean;
    excpItemGlobalSequence: number | null;
    excpAddendaLocatorValue: number;
    excpAddendaLocatorValueSpecified: boolean;
    excpAddendaLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpAddendaSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
