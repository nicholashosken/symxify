import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpLetterSingleSelectableFields } from "./cpLetterSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CpLetterPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpLetterSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}