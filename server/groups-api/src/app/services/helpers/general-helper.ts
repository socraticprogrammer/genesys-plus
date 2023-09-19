export const chunk = (array: any[], size: number): any[] => {
  const chunks = []
  for (let index = 0; index < array.length; index += size) {
    chunks.push(array.slice(index, index + size))
  }

  return chunks
}
