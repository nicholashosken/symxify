import { CpWorkCard } from "./cpWorkCard";
import { VersionType } from "./versionType";

export interface CpWorkCardSearchPagedSelectFieldsResponse {
    cpWorkCard: CpWorkCard[];
    token: string;
    version1: VersionType;
    messageId: string;
}