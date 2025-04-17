import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PortfolioSingleSelectableFields } from "./portfolioSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PortfolioPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PortfolioSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
