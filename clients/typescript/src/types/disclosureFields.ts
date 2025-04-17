import { VersionType } from "./versionType";

export interface DisclosureFields {
    closedEndDisclosureFormat: boolean | null;
    disabilityDescription: boolean | null;
    fedLine1: number[];
    fedLine2: number[];
    jointDisabilityDescription: boolean | null;
    jointLifeDescription: boolean | null;
    secLine1: number[];
    secLine2: number[];
    singleLifeDescription: boolean | null;
    useExtraAddress: boolean | null;
    version1: VersionType;
}