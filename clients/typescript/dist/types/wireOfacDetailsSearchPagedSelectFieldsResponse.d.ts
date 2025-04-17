import { WireOfacDetails } from "./wireOfacDetails";
import { VersionType } from "./versionType";
export interface WireOfacDetailsSearchPagedSelectFieldsResponse {
    wireOfacDetails: WireOfacDetails[];
    token: string;
    version1: VersionType;
    messageId: string;
}
