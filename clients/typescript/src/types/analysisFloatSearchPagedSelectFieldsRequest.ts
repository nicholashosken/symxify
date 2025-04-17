import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AnalysisFloatSingleSelectableFields } from "./analysisFloatSingleSelectableFields";
import { AnalysisFloatSearchFilter } from "./analysisFloatSearchFilter";
import { VersionType } from "./versionType";

export interface AnalysisFloatSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AnalysisFloatSingleSelectableFields;
    searchFilter: AnalysisFloatSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}