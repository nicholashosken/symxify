import { WireServiceMessageFields_2 } from "./wireServiceMessageFields_2";
export interface WireServiceMessageUpdateRequest {
    wireServiceMessageLocatorValue: number;
    wireServiceMessageLocatorValueSpecified: boolean;
    wireServiceMessageLocator: number | null;
    wireServiceMessageFields: WireServiceMessageFields_2;
}
