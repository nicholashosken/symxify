import { Atm } from "./atm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AtmSelectFieldsResponse {
    atm: Atm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
