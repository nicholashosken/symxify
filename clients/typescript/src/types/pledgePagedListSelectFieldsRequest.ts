import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PledgeSingleSelectableFields } from "./pledgeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PledgePagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PledgeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}