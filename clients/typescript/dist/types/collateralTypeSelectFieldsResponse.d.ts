import { CollateralType } from "./collateralType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralTypeSelectFieldsResponse {
    collateralType: CollateralType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
