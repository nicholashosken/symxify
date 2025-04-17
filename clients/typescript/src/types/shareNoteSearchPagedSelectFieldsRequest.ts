import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareNoteSingleSelectableFields } from "./shareNoteSingleSelectableFields";
import { ShareNoteSearchFilter } from "./shareNoteSearchFilter";
import { VersionType } from "./versionType";

export interface ShareNoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareNoteSingleSelectableFields;
    searchFilter: ShareNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}