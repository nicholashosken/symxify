import { StmtMessages } from "./stmtMessages";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StmtMessagesSelectFieldsResponse {
    stmtMessages: StmtMessages;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}