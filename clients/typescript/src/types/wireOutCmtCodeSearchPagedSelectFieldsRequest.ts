import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireOutCmtCodeSingleSelectableFields } from "./wireOutCmtCodeSingleSelectableFields";
import { WireOutCmtCodeSearchFilter } from "./wireOutCmtCodeSearchFilter";
import { VersionType } from "./versionType";

export interface WireOutCmtCodeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireOutCmtCodeSingleSelectableFields;
    searchFilter: WireOutCmtCodeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}