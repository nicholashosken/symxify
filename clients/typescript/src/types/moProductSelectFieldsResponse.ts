import { MoProduct } from "./moProduct";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MoProductSelectFieldsResponse {
    moProduct: MoProduct;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}