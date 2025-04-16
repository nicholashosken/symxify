import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardAccessSingleSelectableFields } from "./cardAccessSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardAccessSelectFieldsRequest {
    accountNumber: string;
    cardLocatorValue: number;
    cardLocatorValueSpecified: boolean;
    cardLocator: number | null;
    cardAccessLocatorValue: number;
    cardAccessLocatorValueSpecified: boolean;
    cardAccessLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardAccessSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}