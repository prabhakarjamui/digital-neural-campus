module {
  public type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    institution : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  public type SubmitInquiryPayload = {
    name : Text;
    email : Text;
    institution : Text;
    phone : Text;
    message : Text;
  };

  public type SubmitResult = {
    #ok : Nat;
    #err : Text;
  };
};
