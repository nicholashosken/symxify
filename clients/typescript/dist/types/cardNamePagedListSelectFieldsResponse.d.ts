import { CardName } from "./cardName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardNamePagedListSelectFieldsResponse {
    cardName: CardName[];
    cardNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
