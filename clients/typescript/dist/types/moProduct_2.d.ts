import { MoProductProductDescription_2 } from "./moProductProductDescription_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MoProduct_2 {
    createCheckRecordValue: boolean;
    createCheckRecordValueSpecified: boolean;
    createCheckRecord: boolean | null;
    numberofProductsValue: number;
    numberofProductsValueSpecified: boolean;
    numberofProducts: number | null;
    productDescription: MoProductProductDescription_2[];
    productDescriptionSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
