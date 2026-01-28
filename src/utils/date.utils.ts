export function formatDate(date: unknown) {
    const d = typeof date === "string" || date instanceof Date ? new Date(date) : null;
    return d && !Number.isNaN(d.valueOf())
        ? d.toLocaleDateString('it-IT', {dateStyle: "full"})
        : String(date ?? "");
}