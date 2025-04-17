import { Stock } from "./stock";
import { VersionType } from "./versionType";
export interface StockPagedListSelectFieldsResponse {
    stock: Stock[];
    token: string;
    version1: VersionType;
    messageId: string;
}
