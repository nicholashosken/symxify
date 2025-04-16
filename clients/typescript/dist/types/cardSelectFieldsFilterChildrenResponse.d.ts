import { Card } from "./card";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardSelectFieldsFilterChildrenResponse {
    card: Card;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
