import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioHoldFields_2 } from "./portfolioHoldFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdatePortfolioHoldByIdRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioHoldLocatorValue: number;
    portfolioHoldLocatorValueSpecified: boolean;
    portfolioHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    portfolioHoldFields: PortfolioHoldFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}