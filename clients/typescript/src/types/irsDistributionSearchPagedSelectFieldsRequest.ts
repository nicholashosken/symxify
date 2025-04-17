import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IrsDistributionSingleSelectableFields } from "./irsDistributionSingleSelectableFields";
import { IrsDistributionSearchFilter } from "./irsDistributionSearchFilter";
import { VersionType } from "./versionType";

export interface IrsDistributionSearchPagedSelectFieldsRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IrsDistributionSingleSelectableFields;
    searchFilter: IrsDistributionSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}