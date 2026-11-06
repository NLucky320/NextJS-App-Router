'use client';

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({
  actionText = 'Share Meal',
  pendingText = 'Submitting...',
}) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? pendingText : actionText}
    </button>
  );
}