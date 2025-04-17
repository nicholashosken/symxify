import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { MbrAddressFmHistorySingleSelectableFields } from "./mbrAddressFmHistorySingleSelectableFields";
import { VersionType } from "./versionType";
export interface MbrAddressFmHistoryPagedListSelectFieldsRequest {
    mbrAddressMbrAddrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: MbrAddressFmHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
