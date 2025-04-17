import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioSelectableFields } from "./portfolioSelectableFields";
import { PortfolioChildrenFilter } from "./portfolioChildrenFilter";
import { VersionType } from "./versionType";

export interface PortfolioSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PortfolioSelectableFields;
    childrenSearchFilter: PortfolioChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}