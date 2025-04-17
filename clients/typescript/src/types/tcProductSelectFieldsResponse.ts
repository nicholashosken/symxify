import { TcProduct } from "./tcProduct";
import { VersionType } from "./versionType";

export interface TcProductSelectFieldsResponse {
    tcProduct: TcProduct;
    version1: VersionType;
    messageId: string;
}