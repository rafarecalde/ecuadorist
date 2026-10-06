import { getCollection, type CollectionEntry } from "astro:content";
import { isAffiliateId, type AffiliateId } from "../config/affiliates";
import { isSection, type SectionId } from "../config/site";

export type Article = CollectionEntry<"articles">;

export async function allArticles(): Promise<Article[]> {
  const articles = await getCollection("articles");
  return articles.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function articlesIn(articles: Article[], section: SectionId): Article[] {
  return articles
    .filter((article) => article.data.section === section)
    .sort((a, b) => a.data.order - b.data.order);
}

export function articlePath(article: Article): string {
  return `/${article.data.section}/${article.id}/`;
}

export function findArticle(articles: Article[], id: string): Article {
  const article = articles.find((item) => item.id === id);
  if (!article) {
    throw new Error(`Missing article: ${id}`);
  }
  return article;
}

export function relatedArticles(articles: Article[], current: Article): Article[] {
  return current.data.related.map((id) => findArticle(articles, id));
}

export function tripIds(article: Article): AffiliateId[] {
  return article.data.trip.map((id) => {
    if (!isAffiliateId(id)) {
      throw new Error(`Unknown affiliate “${id}” on article ${article.id}`);
    }
    return id;
  });
}

export function sectionOf(article: Article): SectionId {
  if (!isSection(article.data.section)) {
    throw new Error(`Unknown section on ${article.id}`);
  }
  return article.data.section;
}

export function readingMinutes(body: string | undefined): number | null {
  if (!body) return null;
  const words = body.trim().split(/\s+/).length;
  if (!words) return null;
  return Math.max(3, Math.round(words / 230));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
