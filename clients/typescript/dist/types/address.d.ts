import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Address {
    houseNumber: string;
    directional: string;
    streetName: string;
    streetType: string;
    city: string;
    state: string;
    zipCode: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
