import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireDrawdownDebitAcctAdvSingleSelectableFields } from "./wireDrawdownDebitAcctAdvSingleSelectableFields";
import { WireDrawdownDebitAcctAdvSearchFilter } from "./wireDrawdownDebitAcctAdvSearchFilter";
import { VersionType } from "./versionType";

export interface WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireDrawdownDebitAcctAdvSingleSelectableFields;
    searchFilter: WireDrawdownDebitAcctAdvSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}