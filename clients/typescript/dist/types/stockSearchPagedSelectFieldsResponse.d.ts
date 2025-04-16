import { Stock } from "./stock";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface StockSearchPagedSelectFieldsResponse {
    stock: Stock[];
    stockSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
