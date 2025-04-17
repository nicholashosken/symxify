import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareAnalysisSingleSelectableFields } from "./shareAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareAnalysisPagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareAnalysisSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}