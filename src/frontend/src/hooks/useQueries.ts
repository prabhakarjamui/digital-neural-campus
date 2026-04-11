import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { Inquiry, SubmitInquiryPayload, SubmitResult } from "../backend.d";

export function useListInquiries() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Inquiry[]>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<SubmitResult, Error, SubmitInquiryPayload>({
    mutationFn: async (payload: SubmitInquiryPayload) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.submitInquiry(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
