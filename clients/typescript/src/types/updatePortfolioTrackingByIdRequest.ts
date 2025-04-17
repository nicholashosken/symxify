import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioTrackingFields_2 } from "./portfolioTrackingFields_2";
import { VersionType } from "./versionType";

export interface UpdatePortfolioTrackingByIdRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    portfolioTrackingFields: PortfolioTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}