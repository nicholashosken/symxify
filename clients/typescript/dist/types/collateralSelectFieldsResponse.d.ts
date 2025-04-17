import { Collateral } from "./collateral";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralSelectFieldsResponse {
    collateral: Collateral;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
