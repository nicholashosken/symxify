import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExcpAddendaSingleSelectableFields } from "./excpAddendaSingleSelectableFields";
import { ExcpAddendaSearchFilter } from "./excpAddendaSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpAddendaSearchPagedSelectFieldsRequest {
    excpItemGlobalSequenceDateValue: string;
    excpItemGlobalSequenceDateValueSpecified: boolean;
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequenceValue: number;
    excpItemGlobalSequenceValueSpecified: boolean;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExcpAddendaSingleSelectableFields;
    searchFilter: ExcpAddendaSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
