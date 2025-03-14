// utils/mutationHelpers.ts
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function handleMutationSuccess(
  message: string,
  router: ReturnType<typeof useRouter>,
  redirectPath?: string,
) {
  toast.success(message);
  if (redirectPath) {
    router.push(redirectPath);
    router.refresh();
  }
}

export function handleMutationError(
  error: unknown,
  router: ReturnType<typeof useRouter>,
  customHandlers?: Record<string, () => void>,
) {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred.";
  toast.error(errorMessage);

  if (
    customHandlers &&
    error instanceof Error &&
    customHandlers[error.message]
  ) {
    customHandlers[error.message]();
  }

  return { message: errorMessage };
}
