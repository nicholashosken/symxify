import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DealerNoteSingleSelectableFields } from "./dealerNoteSingleSelectableFields";
import { DealerNoteSearchFilter } from "./dealerNoteSearchFilter";
import { VersionType } from "./versionType";

export interface DealerNoteSearchPagedSelectFieldsRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DealerNoteSingleSelectableFields;
    searchFilter: DealerNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}