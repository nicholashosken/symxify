import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { BatchRcSingleSelectableFields } from "./batchRcSingleSelectableFields";
import { BatchRcSearchFilter } from "./batchRcSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface BatchRcSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: BatchRcSingleSelectableFields;
    searchFilter: BatchRcSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}