import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioSingleSelectableFields } from "./portfolioSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PortfolioSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PortfolioSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
