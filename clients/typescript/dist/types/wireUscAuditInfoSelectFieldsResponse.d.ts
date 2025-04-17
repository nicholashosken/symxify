import { WireUscAuditInfo } from "./wireUscAuditInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireUscAuditInfoSelectFieldsResponse {
    wireUscAuditInfo: WireUscAuditInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
