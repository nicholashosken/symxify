import { WireOfacDetails } from "./wireOfacDetails";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireOfacDetailsSelectFieldsResponse {
    wireOfacDetails: WireOfacDetails;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}