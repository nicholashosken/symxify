import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireDrawdownDebitAcctAdvSingleSelectableFields } from "./wireDrawdownDebitAcctAdvSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireDrawdownDebitAcctAdvPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireDrawdownDebitAcctAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}