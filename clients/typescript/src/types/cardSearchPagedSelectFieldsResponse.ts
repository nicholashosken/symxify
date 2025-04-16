import { Card } from "./card";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardSearchPagedSelectFieldsResponse {
    card: Card[];
    cardSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}