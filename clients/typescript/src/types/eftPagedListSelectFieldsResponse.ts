import { Eft } from "./eft";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EftPagedListSelectFieldsResponse {
    eft: Eft[];
    eftSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}