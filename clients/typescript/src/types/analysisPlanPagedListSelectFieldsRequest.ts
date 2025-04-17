import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AnalysisPlanSingleSelectableFields } from "./analysisPlanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AnalysisPlanPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AnalysisPlanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}