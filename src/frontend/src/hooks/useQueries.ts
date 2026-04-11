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
      try {
        return await actor.listInquiries();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<SubmitResult | null, Error, SubmitInquiryPayload>({
    mutationFn: async (payload: SubmitInquiryPayload) => {
      if (!actor) {
        // On GoDaddy / static hosting without backend — open mailto as fallback
        const subject = encodeURIComponent(
          `Partner Inquiry from ${payload.name} — ${payload.institution}`,
        );
        const body = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nInstitution: ${payload.institution}\n\nMessage:\n${payload.message}`,
        );
        window.location.href = `mailto:95prabhakar@gmail.com?subject=${subject}&body=${body}`;
        return null;
      }
      try {
        return await actor.submitInquiry(payload);
      } catch {
        // Backend unreachable — use mailto fallback
        const subject = encodeURIComponent(
          `Partner Inquiry from ${payload.name} — ${payload.institution}`,
        );
        const body = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nInstitution: ${payload.institution}\n\nMessage:\n${payload.message}`,
        );
        window.location.href = `mailto:95prabhakar@gmail.com?subject=${subject}&body=${body}`;
        return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
