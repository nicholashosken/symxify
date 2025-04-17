import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioNoteFields_2 } from "./portfolioNoteFields_2";
import { VersionType } from "./versionType";

export interface CreatePortfolioNoteRequest {
    accountNumber: string;
    portfolioId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    portfolioNoteFields: PortfolioNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}