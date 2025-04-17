import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PortfolioHoldSingleSelectableFields } from "./portfolioHoldSingleSelectableFields";
import { PortfolioHoldSearchFilter } from "./portfolioHoldSearchFilter";
import { VersionType } from "./versionType";

export interface PortfolioHoldSearchPagedSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PortfolioHoldSingleSelectableFields;
    searchFilter: PortfolioHoldSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}