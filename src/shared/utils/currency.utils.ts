export namespace CurrencyUtils {
  export function format(money: number) {
    return Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(money);
  }
}
