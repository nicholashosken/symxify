import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareNoteSingleSelectableFields } from "./shareNoteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareNotePagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}