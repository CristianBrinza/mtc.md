// src/utils/laravelCsrf.ts
export function laravelRandom(length?: number): string {
  const size =
    length ?? parseInt(import.meta.env.VITE_CSRF_TOKEN_LENGTH || '40', 10);
  let token = '';

  while (token.length < size) {
    const bytesSize = Math.ceil((size - token.length) / 3) * 3;
    const bytes = new Uint8Array(bytesSize);
    crypto.getRandomValues(bytes);

    token += btoa(String.fromCharCode(...bytes))
      .replace(/[+/=]/g, '')
      .substr(0, size - token.length);
  }

  return token;
}
