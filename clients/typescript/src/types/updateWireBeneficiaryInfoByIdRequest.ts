import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryInfoFields_2 } from "./wireBeneficiaryInfoFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateWireBeneficiaryInfoByIdRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireBeneficiaryInfoLocatorValue: number;
    wireBeneficiaryInfoLocatorValueSpecified: boolean;
    wireBeneficiaryInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireBeneficiaryInfoFields: WireBeneficiaryInfoFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}