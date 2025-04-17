import { Stock } from "./stock";
import { VersionType } from "./versionType";
export interface StockSelectFieldsResponse {
    stock: Stock;
    version1: VersionType;
    messageId: string;
}
