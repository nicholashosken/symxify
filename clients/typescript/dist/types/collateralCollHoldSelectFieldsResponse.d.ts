import { CollateralCollHold } from "./collateralCollHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralCollHoldSelectFieldsResponse {
    collateralCollHold: CollateralCollHold;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
