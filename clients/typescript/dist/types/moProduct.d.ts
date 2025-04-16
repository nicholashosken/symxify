import { MoProductProductDescription } from "./moProductProductDescription";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MoProduct {
    createCheckRecordValue: boolean;
    createCheckRecordValueSpecified: boolean;
    createCheckRecord: boolean | null;
    numberofProductsValue: number;
    numberofProductsValueSpecified: boolean;
    numberofProducts: number | null;
    productDescription: MoProductProductDescription[];
    productDescriptionSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
