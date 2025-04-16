import { ItcInstallation } from "./itcInstallation";

export interface ItcInstallationList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    itcInstallation: ItcInstallation[];
    itcInstallationSpecified: boolean;
}