import { PortfolioNote } from "./portfolioNote";
import { VersionType } from "./versionType";
export interface PortfolioNoteSelectFieldsResponse {
    portfolioNote: PortfolioNote;
    version1: VersionType;
    messageId: string;
}
