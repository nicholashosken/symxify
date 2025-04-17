import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireInCmtCodeSingleSelectableFields } from "./wireInCmtCodeSingleSelectableFields";
import { WireInCmtCodeSearchFilter } from "./wireInCmtCodeSearchFilter";
import { VersionType } from "./versionType";

export interface WireInCmtCodeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireInCmtCodeSingleSelectableFields;
    searchFilter: WireInCmtCodeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}