import { WireIntermedFiAdv } from "./wireIntermedFiAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireIntermedFiAdvPagedListSelectFieldsResponse {
    wireIntermedFiAdv: WireIntermedFiAdv[];
    wireIntermedFiAdvSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}