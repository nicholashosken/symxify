import { SiteCashOrderType } from "./siteCashOrderType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteCashOrderTypePagedListSelectFieldsResponse {
    siteCashOrderType: SiteCashOrderType[];
    siteCashOrderTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}