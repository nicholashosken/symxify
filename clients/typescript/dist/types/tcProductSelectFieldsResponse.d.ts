import { TcProduct } from "./tcProduct";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TcProductSelectFieldsResponse {
    tcProduct: TcProduct;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
