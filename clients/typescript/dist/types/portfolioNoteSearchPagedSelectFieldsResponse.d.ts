import { PortfolioNote } from "./portfolioNote";
import { VersionType } from "./versionType";
export interface PortfolioNoteSearchPagedSelectFieldsResponse {
    portfolioNote: PortfolioNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}
