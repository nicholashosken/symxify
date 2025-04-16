import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PortfolioNoteSingleSelectableFields } from "./portfolioNoteSingleSelectableFields";
import { PortfolioNoteSearchFilter } from "./portfolioNoteSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PortfolioNoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PortfolioNoteSingleSelectableFields;
    searchFilter: PortfolioNoteSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
