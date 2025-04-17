import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrNoteSingleSelectableFields } from "./ctrNoteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrNotePagedListSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}