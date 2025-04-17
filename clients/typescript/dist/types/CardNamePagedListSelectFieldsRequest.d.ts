import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardNameSingleSelectableFields } from "./cardNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CardNamePagedListSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
