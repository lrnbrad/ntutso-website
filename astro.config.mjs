import { defineConfig } from 'astro/config';
const base = (process.env.SITE_BASE || '/').replace(/\/$/, '');
function prefixLocalLinks() {
  function visit(node) {
    for (const key of ['href', 'src']) {
      const value = node.properties?.[key];
      if (typeof value === 'string' && /^\/(?!\/)/.test(value)) node.properties[key] = base + value;
    }
    node.children?.forEach(visit);
  }
  return visit;
}
export default defineConfig({
  site: process.env.SITE_URL,
  base: base || '/',
  markdown: { rehypePlugins: [prefixLocalLinks] },
});
