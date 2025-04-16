import { Security } from "./security";
export interface SecurityList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    security: Security[];
    securitySpecified: boolean;
}
