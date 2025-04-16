import { CardName } from "./cardName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardNameSelectFieldsResponse {
    cardName: CardName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
