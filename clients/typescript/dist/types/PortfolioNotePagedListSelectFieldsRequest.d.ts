import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PortfolioNoteSingleSelectableFields } from "./portfolioNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PortfolioNotePagedListSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PortfolioNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
