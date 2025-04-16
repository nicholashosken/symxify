import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PositivePayFields {
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    typeValue: boolean;
    typeValueSpecified: boolean;
    type: boolean | null;
    vendorIdValue: boolean;
    vendorIdValueSpecified: boolean;
    vendorId: boolean | null;
    vendorIndexValue: boolean;
    vendorIndexValueSpecified: boolean;
    vendorIndex: boolean | null;
    vendorTokenValue: boolean;
    vendorTokenValueSpecified: boolean;
    vendorToken: boolean | null;
    vendorUrlValue: boolean;
    vendorUrlValueSpecified: boolean;
    vendorUrl: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}