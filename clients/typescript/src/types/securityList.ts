import { Security } from "./security";

export interface SecurityList {
    hasReachedMaximumListSize: boolean | null;
    security: Security[];
}