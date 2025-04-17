import { DealerTracking } from "./dealerTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerTrackingSelectFieldsResponse {
    dealerTracking: DealerTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}