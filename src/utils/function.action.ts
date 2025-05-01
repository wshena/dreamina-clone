export function dataURItoBlob(dataURI: string): Blob {
  // split "data:[<mediatype>][;base64],<data>"
  const [header, payload] = dataURI.split(',')
  const isBase64 = header.endsWith(';base64')
  const byteString = isBase64
    ? atob(payload)
    : decodeURIComponent(payload)
  const mimeString = header.split(':')[1].split(';')[0]

  // create ArrayBuffer
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new Blob([ab], { type: mimeString })
}

/**
 * Trigger download ke user
 */
export function downloadDataURI(dataURI: string, filename = 'image.webp') {
  const blob = dataURItoBlob(dataURI)
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function truncateString(input: string, maxLength: number): string {
  if (input?.length <= maxLength) return input;

  const truncated = input?.slice(0, maxLength);
  const lastSpaceIndex = truncated?.lastIndexOf(" ");

  return (lastSpaceIndex > 0 ? truncated?.slice(0, lastSpaceIndex) : truncated) + "...";
}