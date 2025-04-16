import { ExternalLoanTracking } from "./externalLoanTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanTrackingSelectFieldsResponse {
    externalLoanTracking: ExternalLoanTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}