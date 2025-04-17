import { WireOfacDetails } from "./wireOfacDetails";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireOfacDetailsPagedListSelectFieldsResponse {
    wireOfacDetails: WireOfacDetails[];
    wireOfacDetailsSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
