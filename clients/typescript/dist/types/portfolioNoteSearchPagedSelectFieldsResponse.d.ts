import { PortfolioNote } from "./portfolioNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PortfolioNoteSearchPagedSelectFieldsResponse {
    portfolioNote: PortfolioNote[];
    portfolioNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
