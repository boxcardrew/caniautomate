function importAll(r) {
  return r.keys().map((filename) => ({
    link: filename.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(filename)
  }));
}

export const guides = importAll(
  require.context("./pages/guides/", true, /\.mdx$/)
);
