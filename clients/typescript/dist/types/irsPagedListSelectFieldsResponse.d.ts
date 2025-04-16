import { Irs } from "./irs";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IrsPagedListSelectFieldsResponse {
    irs: Irs[];
    irsSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
