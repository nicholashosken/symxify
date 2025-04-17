import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CheckFmHistorySingleSelectableFields } from "./checkFmHistorySingleSelectableFields";
import { CheckFmHistorySearchFilter } from "./checkFmHistorySearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CheckFmHistorySearchPagedSelectFieldsRequest {
    checkGlobalSequenceDateValue: string;
    checkGlobalSequenceDateValueSpecified: boolean;
    checkGlobalSequenceDate: string | null;
    checkGlobalSequenceValue: number;
    checkGlobalSequenceValueSpecified: boolean;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CheckFmHistorySingleSelectableFields;
    searchFilter: CheckFmHistorySearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}