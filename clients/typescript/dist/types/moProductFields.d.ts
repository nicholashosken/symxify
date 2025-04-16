import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MoProductFields {
    createCheckRecordValue: boolean;
    createCheckRecordValueSpecified: boolean;
    createCheckRecord: boolean | null;
    numberofProductsValue: boolean;
    numberofProductsValueSpecified: boolean;
    numberofProducts: boolean | null;
    productDescription: number[];
    productDescriptionSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
