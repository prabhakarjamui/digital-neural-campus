import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type SubmitResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface Inquiry {
    id: bigint;
    institution: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface SubmitInquiryPayload {
    institution: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    listInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(payload: SubmitInquiryPayload): Promise<SubmitResult>;
}
