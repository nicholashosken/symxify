import { TcProductProductDescription_2 } from "./tcProductProductDescription_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TcProduct_2 {
    createCheckRecordValue: boolean;
    createCheckRecordValueSpecified: boolean;
    createCheckRecord: boolean | null;
    numberofProductsValue: number;
    numberofProductsValueSpecified: boolean;
    numberofProducts: number | null;
    productDescription: TcProductProductDescription_2[];
    productDescriptionSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}