import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpWorkCardTrackingSingleSelectableFields } from "./cpWorkCardTrackingSingleSelectableFields";
import { CpWorkCardTrackingSearchFilter } from "./cpWorkCardTrackingSearchFilter";
import { VersionType } from "./versionType";
export interface CpWorkCardTrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpWorkCardTrackingSingleSelectableFields;
    searchFilter: CpWorkCardTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
