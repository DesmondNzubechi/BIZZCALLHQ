import { cloneElement, isValidElement, type ReactElement } from "react";
import { cn } from "@/lib/cn";
import styles from "./FormField.module.css";

type ControlProps = {
  id?: string;
  className?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean | "true" | "false";
  "aria-required"?: boolean | "true" | "false";
};

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactElement<ControlProps>;
};

export function FormField({ id, label, hint, error, required, children }: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  if (!isValidElement(children)) {
    return null;
  }

  const control = cloneElement(children, {
    id,
    "aria-describedby": describedBy,
    "aria-invalid": error ? true : undefined,
    "aria-required": required ? true : undefined,
    className: cn(styles.control, error && styles.invalid, children.props.className),
  });

  return (
    <div className={styles.field}>
      <label className={cn("type-label", styles.label)} htmlFor={id}>
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="visually-hidden"> (required)</span>
          </>
        ) : null}
      </label>
      {control}
      {hint ? (
        <p id={hintId} className={cn("type-body-sm", styles.hint)}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={cn("type-body-sm", styles.error)} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export type { FormFieldProps };
