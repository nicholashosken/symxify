import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NoteSingleSelectableFields } from "./noteSingleSelectableFields";
import { NoteSearchFilter } from "./noteSearchFilter";
import { VersionType } from "./versionType";
export interface NoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NoteSingleSelectableFields;
    searchFilter: NoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
