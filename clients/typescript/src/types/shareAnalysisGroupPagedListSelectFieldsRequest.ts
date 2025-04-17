import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareAnalysisGroupSingleSelectableFields } from "./shareAnalysisGroupSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareAnalysisGroupPagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareAnalysisGroupSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}