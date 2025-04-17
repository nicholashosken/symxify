import { CpWorkCard } from "./cpWorkCard";
import { VersionType } from "./versionType";

export interface CpWorkCardSelectFieldsFilterChildrenResponse {
    cpWorkCard: CpWorkCard;
    version1: VersionType;
    messageId: string;
}