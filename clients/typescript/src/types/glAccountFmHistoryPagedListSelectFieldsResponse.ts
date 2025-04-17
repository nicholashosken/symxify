import { GlAccountFmHistory } from "./glAccountFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlAccountFmHistoryPagedListSelectFieldsResponse {
    glAccountFmHistory: GlAccountFmHistory[];
    glAccountFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}