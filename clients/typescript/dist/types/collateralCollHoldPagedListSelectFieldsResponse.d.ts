import { CollateralCollHold } from "./collateralCollHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralCollHoldPagedListSelectFieldsResponse {
    collateralCollHold: CollateralCollHold[];
    collateralCollHoldSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
