import { ItcInstallation } from "./itcInstallation";
export interface ItcInstallationList {
    hasReachedMaximumListSize: boolean | null;
    itcInstallation: ItcInstallation[];
}
