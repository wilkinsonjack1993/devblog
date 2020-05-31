declare module 'remark-html' {
  const html: any
  export default html
}

declare module '*.module.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.module.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
