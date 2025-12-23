// Custom image loader for CDN support
export default function imageLoader({ src, width, quality }) {
  // If it's already a full URL, return as is
  if (src.startsWith('http')) {
    return src
  }
  
  // If CDN is configured, use it
  if (process.env.NEXT_PUBLIC_CDN_URL) {
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL
    const params = new URLSearchParams({
      url: src,
      w: width.toString(),
      q: (quality || 75).toString(),
    })
    
    return `${cdnUrl}/_next/image?${params.toString()}`
  }
  
  // Fallback to default Next.js image optimization
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`
}
