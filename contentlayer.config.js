import { makeSource, defineDocumentType } from "@contentlayer/source-files";
const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
    },
    description: {
      type: "string",
    },
    image: { type: "string", required: true },
    isPublished: {
      type: 'boolean',
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
  },
}));
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
});
