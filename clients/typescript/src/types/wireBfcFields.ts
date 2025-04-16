import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBfcFields {
    svcAvailability: number[];
    svcAvailabilitySpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}