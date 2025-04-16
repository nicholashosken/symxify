import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PortfolioSingleSelectableFields } from "./portfolioSingleSelectableFields";
import { PortfolioSearchFilter } from "./portfolioSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PortfolioSingleSelectableFields;
    searchFilter: PortfolioSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}