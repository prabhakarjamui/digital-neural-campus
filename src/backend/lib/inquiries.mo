import Types "../types/inquiries";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submit(
    inquiries : List.List<Types.Inquiry>,
    payload : Types.SubmitInquiryPayload,
  ) : Types.SubmitResult {
    let id = inquiries.size();
    let inquiry : Types.Inquiry = {
      id;
      name = payload.name;
      email = payload.email;
      institution = payload.institution;
      phone = payload.phone;
      message = payload.message;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
    #ok(id);
  };

  public func listAll(inquiries : List.List<Types.Inquiry>) : [Types.Inquiry] {
    inquiries.toArray();
  };
};
