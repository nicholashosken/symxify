import { ExternalLoanTracking } from "./externalLoanTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanTrackingSearchPagedSelectFieldsResponse {
    externalLoanTracking: ExternalLoanTracking[];
    externalLoanTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}