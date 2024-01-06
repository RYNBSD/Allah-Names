import { readFile as readFileAsync } from "node:fs/promises";

export async function readFile<T = unknown>(path: string) {
  try {
    const buf = await readFileAsync(path);
    const str = buf.toString();
    const prs = JSON.parse(str) as T;
    return prs;
  } catch (error) {
    console.error(error);
  }
  return null;
}
