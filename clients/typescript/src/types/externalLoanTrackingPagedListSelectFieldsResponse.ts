import { ExternalLoanTracking } from "./externalLoanTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanTrackingPagedListSelectFieldsResponse {
    externalLoanTracking: ExternalLoanTracking[];
    externalLoanTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}