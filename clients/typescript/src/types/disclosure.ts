import { DisclosureFedLine1 } from "./disclosureFedLine1";
import { DisclosureFedLine2 } from "./disclosureFedLine2";
import { DisclosureSecLine1 } from "./disclosureSecLine1";
import { DisclosureSecLine2 } from "./disclosureSecLine2";
import { VersionType } from "./versionType";

export interface Disclosure {
    closedEndDisclosureFormat: number | null;
    disabilityDescription: string;
    fedLine1: DisclosureFedLine1[];
    fedLine2: DisclosureFedLine2[];
    jointDisabilityDescription: string;
    jointLifeDescription: string;
    secLine1: DisclosureSecLine1[];
    secLine2: DisclosureSecLine2[];
    singleLifeDescription: string;
    useExtraAddress: boolean | null;
    version1: VersionType;
}