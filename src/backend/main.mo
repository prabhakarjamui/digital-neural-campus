import Types "types/inquiries";
import InquiriesMixin "mixins/inquiries-api";
import List "mo:core/List";

actor {
  let inquiries = List.empty<Types.Inquiry>();

  include InquiriesMixin(inquiries);
};
