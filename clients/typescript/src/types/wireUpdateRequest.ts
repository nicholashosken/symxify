import { WireFields_2 } from "./wireFields_2";

export interface WireUpdateRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireFields: WireFields_2;
}