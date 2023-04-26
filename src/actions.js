export const LISTEYE_EKLE = "listeyeEkle";

export const LISTEDEN_CIKAR = "listedenCikar";

export function listeyeEkle(item) {
  return { type: LISTEYE_EKLE, payload: item };
}
export function listedenCikar(itemId) {
  return { type: LISTEDEN_CIKAR, payload: itemId };
}
