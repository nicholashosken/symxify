import { SiteCashOrderType } from "./siteCashOrderType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteCashOrderTypeSelectFieldsResponse {
    siteCashOrderType: SiteCashOrderType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}