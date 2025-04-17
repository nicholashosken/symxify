import { WireReceiverFiInfo } from "./wireReceiverFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireReceiverFiInfoSelectFieldsResponse {
    wireReceiverFiInfo: WireReceiverFiInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
