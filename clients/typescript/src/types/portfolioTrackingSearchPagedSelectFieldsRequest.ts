import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PortfolioTrackingSingleSelectableFields } from "./portfolioTrackingSingleSelectableFields";
import { PortfolioTrackingSearchFilter } from "./portfolioTrackingSearchFilter";
import { VersionType } from "./versionType";

export interface PortfolioTrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PortfolioTrackingSingleSelectableFields;
    searchFilter: PortfolioTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}