import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardNoteSingleSelectableFields } from "./cardNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CardNotePagedListSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
