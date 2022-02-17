export function dateToStringBOM(date: Date) {
  return (
    date.getUTCFullYear().toString() +
    (date.getUTCMonth() + 1).toString().padStart(2, "0") +
    date.getUTCDate().toString().padStart(2, "0") +
    date.getUTCHours().toString().padStart(2, "0") +
    (Math.floor(date.getUTCMinutes() / 10) * 10).toString().padStart(2, "0")
  );
}