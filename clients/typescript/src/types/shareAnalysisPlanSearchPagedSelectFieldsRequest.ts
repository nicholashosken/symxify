import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareAnalysisPlanSingleSelectableFields } from "./shareAnalysisPlanSingleSelectableFields";
import { ShareAnalysisPlanSearchFilter } from "./shareAnalysisPlanSearchFilter";
import { VersionType } from "./versionType";

export interface ShareAnalysisPlanSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareAnalysisPlanSingleSelectableFields;
    searchFilter: ShareAnalysisPlanSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}