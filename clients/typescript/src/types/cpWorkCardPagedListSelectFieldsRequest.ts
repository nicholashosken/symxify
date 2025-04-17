import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpWorkCardSingleSelectableFields } from "./cpWorkCardSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CpWorkCardPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpWorkCardSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}