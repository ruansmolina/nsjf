


export function PriceFormatter(price?: number | string | null) {
  const value = Number(price ?? 0)

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}