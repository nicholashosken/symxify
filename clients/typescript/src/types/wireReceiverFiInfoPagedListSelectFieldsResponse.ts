import { WireReceiverFiInfo } from "./wireReceiverFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireReceiverFiInfoPagedListSelectFieldsResponse {
    wireReceiverFiInfo: WireReceiverFiInfo[];
    wireReceiverFiInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}