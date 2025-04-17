import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrBranchSingleSelectableFields } from "./ctrBranchSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrBranchPagedListSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrBranchSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}