import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareAnalysisGroupSingleSelectableFields } from "./shareAnalysisGroupSingleSelectableFields";
import { ShareAnalysisGroupSearchFilter } from "./shareAnalysisGroupSearchFilter";
import { VersionType } from "./versionType";
export interface ShareAnalysisGroupSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareAnalysisGroupSingleSelectableFields;
    searchFilter: ShareAnalysisGroupSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
