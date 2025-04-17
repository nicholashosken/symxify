import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AnalysisFloatSingleSelectableFields } from "./analysisFloatSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AnalysisFloatPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AnalysisFloatSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
