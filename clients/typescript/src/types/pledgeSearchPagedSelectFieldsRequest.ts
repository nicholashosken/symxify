import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PledgeSingleSelectableFields } from "./pledgeSingleSelectableFields";
import { PledgeSearchFilter } from "./pledgeSearchFilter";
import { VersionType } from "./versionType";

export interface PledgeSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PledgeSingleSelectableFields;
    searchFilter: PledgeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}