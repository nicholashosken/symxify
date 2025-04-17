import { MoProduct } from "./moProduct";
import { VersionType } from "./versionType";

export interface MoProductSelectFieldsResponse {
    moProduct: MoProduct;
    version1: VersionType;
    messageId: string;
}