import type { RuleFunction } from "./types/types.ts";

export const stringRule =
  (): RuleFunction =>
  (value: string): string | null =>
    typeof value === "string" ? null : "Должно быть строкой";

export const minLengthRule =
  (min: number): RuleFunction =>
  (value: string): string | null =>
    value.length >= min ? null : `Минимум ${min} символов`;

export const maxLengthRule =
  (max: number): RuleFunction =>
  (value: string): string | null =>
    value.length <= max ? null : `Максимум ${max} символов`;

export const emailRule =
  (message?: string): RuleFunction =>
  (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : message || "Некорректный email";
  };
