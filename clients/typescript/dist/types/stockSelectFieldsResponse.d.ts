import { Stock } from "./stock";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface StockSelectFieldsResponse {
    stock: Stock;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
