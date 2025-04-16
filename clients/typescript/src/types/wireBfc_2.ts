import { WireBfcSvcAvailability_2 } from "./wireBfcSvcAvailability_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBfc_2 {
    svcAvailability: WireBfcSvcAvailability_2[];
    svcAvailabilitySpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}