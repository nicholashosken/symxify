import { DailyPost } from "./dailyPost";

export interface DailyPostList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    dailyPost: DailyPost[];
    dailyPostSpecified: boolean;
}