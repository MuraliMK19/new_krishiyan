export function extractCodeFromDriveLink(url: string): any {
  // console.log("url : ", url);
  const pattern = /\/file\/d\/([a-zA-Z0-9_-]+)\//;
  const match = url.match(pattern);
  // console.log("pattern : ", match);
  return match && match[1];
}
