import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IrsDistributionSingleSelectableFields } from "./irsDistributionSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IrsDistributionPagedListSelectFieldsRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IrsDistributionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
