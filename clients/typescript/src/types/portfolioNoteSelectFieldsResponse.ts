import { PortfolioNote } from "./portfolioNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioNoteSelectFieldsResponse {
    portfolioNote: PortfolioNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}