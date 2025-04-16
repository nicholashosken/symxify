import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PositivePay_2 {
    description: string;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    vendorId: string;
    vendorIndexValue: number;
    vendorIndexValueSpecified: boolean;
    vendorIndex: number | null;
    vendorToken: string;
    vendorUrl: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}