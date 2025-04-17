import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrPersonSingleSelectableFields } from "./ctrPersonSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrPersonPagedListSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrPersonSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}