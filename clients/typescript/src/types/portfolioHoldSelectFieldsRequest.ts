import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioHoldSingleSelectableFields } from "./portfolioHoldSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PortfolioHoldSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PortfolioHoldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}