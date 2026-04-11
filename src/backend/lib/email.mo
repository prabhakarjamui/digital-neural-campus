import Char "mo:core/Char";
import Text "mo:core/Text";

module {
  // IC management canister HTTP outcall types
  type HttpHeader = { name : Text; value : Text };
  type HttpMethod = { #get; #post; #head };
  type HttpRequest = {
    url : Text;
    max_response_bytes : ?Nat64;
    headers : [HttpHeader];
    body : ?Blob;
    method : HttpMethod;
    transform : ?{
      function : shared query ({ response : HttpResponse; context : Blob }) -> async HttpResponse;
      context : Blob;
    };
  };
  type HttpResponse = {
    status : Nat;
    headers : [HttpHeader];
    body : Blob;
  };

  // IC management canister actor (anonymous principal "aaaaa-aa")
  let ic : actor {
    http_request : HttpRequest -> async HttpResponse;
  } = actor "aaaaa-aa";

  // Minimal JSON string escaping for plain text content
  func escapeJson(s : Text) : Text {
    var result = "";
    for (c in s.toIter()) {
      let code = c.toNat32();
      if (code == 92) {
        // backslash
        result := result # "\\\\";
      } else if (code == 34) {
        // double-quote
        result := result # "\\\"";
      } else if (code == 10) {
        // newline
        result := result # "\\n";
      } else if (code == 13) {
        // carriage return
        result := result # "\\r";
      } else if (code == 9) {
        // tab
        result := result # "\\t";
      } else {
        result := result # Text.fromChar(c);
      };
    };
    result;
  };

  // Build MailChannels JSON body for sending email
  func buildEmailBody(
    senderName : Text,
    senderEmail : Text,
    institution : Text,
    phone : Text,
    message : Text,
  ) : Text {
    let content =
      "New Partner Inquiry received via PNACADEMY EDTECH website.\n\n" #
      "Name: " # senderName # "\n" #
      "Email: " # senderEmail # "\n" #
      "Institution: " # institution # "\n" #
      "Phone: " # phone # "\n\n" #
      "Message:\n" # message # "\n";

    let escaped = escapeJson(content);

    "{" #
    "\"from\":{\"email\":\"noreply@pnacademy.edu.in\",\"name\":\"PNACADEMY EDTECH\"}," #
    "\"subject\":\"New Partner Inquiry - PNACADEMY EDTECH\"," #
    "\"content\":[{\"type\":\"text/plain\",\"value\":\"" # escaped # "\"}]," #
    "\"personalizations\":[{\"to\":[{\"email\":\"95prabhakar@gmail.com\",\"name\":\"Prabhakar Kumar\"}]}]" #
    "}";
  };

  // Send email notification via MailChannels HTTP outcall.
  // Returns silently on failure — callers should wrap in try/catch.
  public func sendInquiryEmail(
    senderName : Text,
    senderEmail : Text,
    institution : Text,
    phone : Text,
    message : Text,
  ) : async () {
    let body = buildEmailBody(senderName, senderEmail, institution, phone, message);
    let bodyBlob = body.encodeUtf8();

    let _response = await ic.http_request({
      url = "https://api.mailchannels.net/tx/v1/send";
      max_response_bytes = ?2048;
      headers = [{ name = "Content-Type"; value = "application/json" }];
      body = ?bodyBlob;
      method = #post;
      transform = null;
    });
  };
};
