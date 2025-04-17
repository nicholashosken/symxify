import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PortfolioSingleSelectableFields } from "./portfolioSingleSelectableFields";
import { PortfolioSearchFilter } from "./portfolioSearchFilter";
import { VersionType } from "./versionType";

export interface PortfolioSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PortfolioSingleSelectableFields;
    searchFilter: PortfolioSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}