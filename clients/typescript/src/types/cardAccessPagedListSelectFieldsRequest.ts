import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardAccessSingleSelectableFields } from "./cardAccessSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CardAccessPagedListSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardAccessSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}