import Types "../types/inquiries";
import InquiriesLib "../lib/inquiries";
import EmailLib "../lib/email";
import List "mo:core/List";

mixin (inquiries : List.List<Types.Inquiry>) {
  public shared func submitInquiry(payload : Types.SubmitInquiryPayload) : async Types.SubmitResult {
    // Always store the inquiry first, regardless of email outcome
    let result = InquiriesLib.submit(inquiries, payload);

    // Send email notification — failures are silently swallowed, never affect the result
    try {
      await EmailLib.sendInquiryEmail(
        payload.name,
        payload.email,
        payload.institution,
        payload.phone,
        payload.message,
      );
    } catch (_e) {
      // Email delivery failure is non-fatal — inquiry is already stored
    };

    result;
  };

  public query func listInquiries() : async [Types.Inquiry] {
    InquiriesLib.listAll(inquiries);
  };
};
