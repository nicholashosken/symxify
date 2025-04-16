import { CpWorkCardTracking } from "./cpWorkCardTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CpWorkCardTrackingSelectFieldsResponse {
    cpWorkCardTracking: CpWorkCardTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}