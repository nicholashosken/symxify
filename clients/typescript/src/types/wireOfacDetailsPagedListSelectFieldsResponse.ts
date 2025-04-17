import { WireOfacDetails } from "./wireOfacDetails";
import { VersionType } from "./versionType";

export interface WireOfacDetailsPagedListSelectFieldsResponse {
    wireOfacDetails: WireOfacDetails[];
    token: string;
    version1: VersionType;
    messageId: string;
}