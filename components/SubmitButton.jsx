"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      // disabled={pending}
      disabled
      className="px-4 py-2 text-white bg-teal-500 rounded-lg cursor-not-allowed"
    >
      {pending ? <>loading...</> : <>Add Comment...</>}
    </button>
  );
}
