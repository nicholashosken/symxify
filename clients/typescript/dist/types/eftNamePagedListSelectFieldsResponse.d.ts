import { EftName } from "./eftName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftNamePagedListSelectFieldsResponse {
    eftName: EftName[];
    eftNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
