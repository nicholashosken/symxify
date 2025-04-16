import { EftName } from "./eftName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftNameSelectFieldsResponse {
    eftName: EftName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
