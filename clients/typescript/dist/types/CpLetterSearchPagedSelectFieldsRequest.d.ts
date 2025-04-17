import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpLetterSingleSelectableFields } from "./cpLetterSingleSelectableFields";
import { CpLetterSearchFilter } from "./cpLetterSearchFilter";
import { VersionType } from "./versionType";
export interface CpLetterSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpLetterSingleSelectableFields;
    searchFilter: CpLetterSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
