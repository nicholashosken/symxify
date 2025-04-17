import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NoteSingleSelectableFields } from "./noteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface NotePagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
