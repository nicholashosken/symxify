import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareAnalysisSingleSelectableFields } from "./shareAnalysisSingleSelectableFields";
import { ShareAnalysisSearchFilter } from "./shareAnalysisSearchFilter";
import { VersionType } from "./versionType";
export interface ShareAnalysisSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareAnalysisSingleSelectableFields;
    searchFilter: ShareAnalysisSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
