import { TcProductProductDescription } from "./tcProductProductDescription";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TcProduct {
    createCheckRecordValue: boolean;
    createCheckRecordValueSpecified: boolean;
    createCheckRecord: boolean | null;
    numberofProductsValue: number;
    numberofProductsValueSpecified: boolean;
    numberofProducts: number | null;
    productDescription: TcProductProductDescription[];
    productDescriptionSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}