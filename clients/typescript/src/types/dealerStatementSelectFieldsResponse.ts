import { DealerStatement } from "./dealerStatement";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerStatementSelectFieldsResponse {
    dealerStatement: DealerStatement;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}