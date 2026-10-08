import { getCollection, type CollectionEntry } from "astro:content";

export type Issue = CollectionEntry<"news">;

export async function allIssues(): Promise<Issue[]> {
  const issues = await getCollection("news");
  return issues.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export function issuePath(issue: Issue): string {
  return `/this-week/${issue.id}/`;
}

export function latestIssue(issues: Issue[]): Issue {
  const issue = issues[0];
  if (!issue) throw new Error("No weekly issues yet");
  return issue;
}

/** Format YYYY-MM-DD without a timezone shift. */
export function formatLongDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}
