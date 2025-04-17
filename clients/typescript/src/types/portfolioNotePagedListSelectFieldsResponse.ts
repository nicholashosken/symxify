import { PortfolioNote } from "./portfolioNote";
import { VersionType } from "./versionType";

export interface PortfolioNotePagedListSelectFieldsResponse {
    portfolioNote: PortfolioNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}