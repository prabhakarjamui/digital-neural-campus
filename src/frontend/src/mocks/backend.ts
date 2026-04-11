import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  listInquiries: async () => [
    {
      id: BigInt(1),
      institution: "Patna University",
      name: "Dr. Rajesh Kumar",
      email: "rajesh@patna.edu",
      message: "We are interested in your evaluation platform for our upcoming semester exams.",
      timestamp: BigInt(1712800000000000000),
      phone: "9876543210",
    },
    {
      id: BigInt(2),
      institution: "Magadh University",
      name: "Prof. Sunita Devi",
      email: "sunita@magadh.edu",
      message: "Please share more details about the COSE framework implementation.",
      timestamp: BigInt(1712810000000000000),
      phone: "9765432109",
    },
  ],
  submitInquiry: async (_payload) => ({
    __kind__: "ok",
    ok: BigInt(3),
  }),
};
