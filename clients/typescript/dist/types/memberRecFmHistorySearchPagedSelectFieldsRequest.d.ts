import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { MemberRecFmHistorySingleSelectableFields } from "./memberRecFmHistorySingleSelectableFields";
import { MemberRecFmHistorySearchFilter } from "./memberRecFmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface MemberRecFmHistorySearchPagedSelectFieldsRequest {
    memberRecMemberNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: MemberRecFmHistorySingleSelectableFields;
    searchFilter: MemberRecFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
