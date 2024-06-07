type CanErrorType<T extends Object> = T | { error: string };

export function isError<T extends Object>(
  data: CanErrorType<T>,
): data is { error: string } {
  return 'error' in data;
}
