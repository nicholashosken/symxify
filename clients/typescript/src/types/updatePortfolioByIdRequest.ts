import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioFields_2 } from "./portfolioFields_2";
import { VersionType } from "./versionType";

export interface UpdatePortfolioByIdRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    portfolioFields: PortfolioFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}