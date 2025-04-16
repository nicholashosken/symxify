import { CpWorkCardTracking } from "./cpWorkCardTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CpWorkCardTrackingSearchPagedSelectFieldsResponse {
    cpWorkCardTracking: CpWorkCardTracking[];
    cpWorkCardTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}