import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getMdxFiles(dir: string) {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch {
    return [];
  }
}

export function readMdxContent(dir: string, fileName: string) {
  const filePath = path.join(dir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content,
    slug: fileName.replace(/\.mdx?$/, ""),
  };
}

export function getSortedContentByFrontmatter(folder: string) {
  const dir = path.join(CONTENT_DIR, folder);
  const files = getMdxFiles(dir);

  const contentList = files.map((file) => {
    return readMdxContent(dir, file);
  });

  return contentList.sort((a, b) => {
    // Sort by order if it exists, else by date
    if (a.frontMatter.order && b.frontMatter.order) {
      return a.frontMatter.order - b.frontMatter.order;
    }
    if (a.frontMatter.date && b.frontMatter.date) {
      return (
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
      );
    }
    return 0;
  });
}

// Type Helpers
export type ExperienceItem = {
  frontMatter: {
    title: string;
    company: string;
    date: string;
    location: string;
    live?: string;
    order?: number;
  };
  content: string;
  slug: string;
};

export type ProjectItem = {
  frontMatter: {
    title: string;
    role: string;
    date: string;
    techStack: string[];
    image?: string;
    live?: string;
    github?: string;
    order?: number;
  };
  content: string;
  slug: string;
};

export type EducationItem = {
  frontMatter: {
    degree: string;
    school: string;
    date: string;
    location: string;
    details?: string;
    order?: number;
  };
  content: string;
  slug: string;
};
