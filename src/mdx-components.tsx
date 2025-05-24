import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: '2rem' }}>{children}</h1>,
    p: ({ children }) => <p style={{ margin: '1rem 0' }}>{children}</p>,
    ...components,
  }
}