import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpWorkCardSingleSelectableFields } from "./cpWorkCardSingleSelectableFields";
import { CpWorkCardSearchFilter } from "./cpWorkCardSearchFilter";
import { VersionType } from "./versionType";
export interface CpWorkCardSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpWorkCardSingleSelectableFields;
    searchFilter: CpWorkCardSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
