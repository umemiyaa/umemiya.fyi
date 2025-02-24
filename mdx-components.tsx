import type { MDXComponents } from 'mdx/types'
import { mdxH1 } from './components/mdx/h1'
import { mdxA } from './components/mdx/a'
import { mdxH2 } from './components/mdx/h2'
import { mdxP } from './components/mdx/p'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: mdxH1,
    h2: mdxH2,
    a: mdxA,
    p: mdxP,
    ...components,
  }
}