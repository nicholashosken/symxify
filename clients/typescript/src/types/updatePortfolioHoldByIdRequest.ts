import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioHoldFields_2 } from "./portfolioHoldFields_2";
import { VersionType } from "./versionType";

export interface UpdatePortfolioHoldByIdRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    portfolioHoldFields: PortfolioHoldFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}