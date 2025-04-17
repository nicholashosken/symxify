import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrNoteSingleSelectableFields } from "./ctrNoteSingleSelectableFields";
import { CtrNoteSearchFilter } from "./ctrNoteSearchFilter";
import { VersionType } from "./versionType";

export interface CtrNoteSearchPagedSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrNoteSingleSelectableFields;
    searchFilter: CtrNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}