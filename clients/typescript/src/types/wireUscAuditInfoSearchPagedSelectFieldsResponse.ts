import { WireUscAuditInfo } from "./wireUscAuditInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireUscAuditInfoSearchPagedSelectFieldsResponse {
    wireUscAuditInfo: WireUscAuditInfo[];
    wireUscAuditInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}