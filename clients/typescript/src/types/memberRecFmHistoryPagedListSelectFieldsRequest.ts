import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { MemberRecFmHistorySingleSelectableFields } from "./memberRecFmHistorySingleSelectableFields";
import { VersionType } from "./versionType";

export interface MemberRecFmHistoryPagedListSelectFieldsRequest {
    memberRecMemberNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: MemberRecFmHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}