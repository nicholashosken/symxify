import { Stock } from "./stock";
import { VersionType } from "./versionType";

export interface StockSearchPagedSelectFieldsResponse {
    stock: Stock[];
    token: string;
    version1: VersionType;
    messageId: string;
}