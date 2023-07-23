export default {
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <time>{new Date().getFullYear()}</time> © Michael Tedla.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      <meta property="og:site_name" content="mickykebe" />
      <meta name="og:title" content={meta.title ?? title} />
      {meta.image && <meta name="og:image" content={meta.image} />}
      {meta.description && (
        <meta name="og:description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mickykebe" />
      <meta name="twitter:title" content={meta.title ?? title} />
      {meta.description && (
        <meta name="twitter:description" content={meta.description} />
      )}
      {meta.image && <meta name="twitter:image" content={meta.image} />}
    </>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: true,
  navs: [],
};
