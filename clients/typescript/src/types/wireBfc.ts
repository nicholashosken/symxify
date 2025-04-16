import { WireBfcSvcAvailability } from "./wireBfcSvcAvailability";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBfc {
    svcAvailability: WireBfcSvcAvailability[];
    svcAvailabilitySpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}