import { DailyPost } from "./dailyPost";

export interface DailyPostList {
    hasReachedMaximumListSize: boolean | null;
    dailyPost: DailyPost[];
}