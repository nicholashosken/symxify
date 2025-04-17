import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CheckVerificationRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    micrNumber: string;
    routingNumber: string;
    draftNumber: string;
    amount: number;
    payee: string;
    vendorIndexValue: number;
    vendorIndexValueSpecified: boolean;
    vendorIndex: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}