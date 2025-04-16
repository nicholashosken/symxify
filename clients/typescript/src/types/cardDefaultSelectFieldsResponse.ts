import { CardDefault } from "./cardDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardDefaultSelectFieldsResponse {
    cardDefault: CardDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}