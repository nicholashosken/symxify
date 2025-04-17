import { CpWorkCard } from "./cpWorkCard";
import { VersionType } from "./versionType";
export interface CpWorkCardSelectFieldsResponse {
    cpWorkCard: CpWorkCard;
    version1: VersionType;
    messageId: string;
}
