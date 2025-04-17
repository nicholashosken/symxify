import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrBranchSingleSelectableFields } from "./ctrBranchSingleSelectableFields";
import { CtrBranchSearchFilter } from "./ctrBranchSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrBranchSearchPagedSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrBranchSingleSelectableFields;
    searchFilter: CtrBranchSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}