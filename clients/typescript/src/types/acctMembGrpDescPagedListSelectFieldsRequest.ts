import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcctMembGrpDescSingleSelectableFields } from "./acctMembGrpDescSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AcctMembGrpDescPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcctMembGrpDescSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}