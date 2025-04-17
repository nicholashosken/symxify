import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftNameSingleSelectableFields } from "./eftNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface EftNamePagedListSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}