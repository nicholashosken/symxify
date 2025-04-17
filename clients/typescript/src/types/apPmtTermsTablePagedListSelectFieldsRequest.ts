import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ApPmtTermsTableSingleSelectableFields } from "./apPmtTermsTableSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ApPmtTermsTablePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ApPmtTermsTableSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}