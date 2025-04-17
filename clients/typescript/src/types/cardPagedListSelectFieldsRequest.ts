import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardSingleSelectableFields } from "./cardSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CardPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}