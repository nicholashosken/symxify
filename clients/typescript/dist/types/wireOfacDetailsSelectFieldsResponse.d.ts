import { WireOfacDetails } from "./wireOfacDetails";
import { VersionType } from "./versionType";
export interface WireOfacDetailsSelectFieldsResponse {
    wireOfacDetails: WireOfacDetails;
    version1: VersionType;
    messageId: string;
}
