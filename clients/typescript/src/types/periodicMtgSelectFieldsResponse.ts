import { PeriodicMtg } from "./periodicMtg";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PeriodicMtgSelectFieldsResponse {
    periodicMtg: PeriodicMtg;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}