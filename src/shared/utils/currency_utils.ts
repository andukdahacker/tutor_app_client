export namespace CurrencyUtils {
  export function fromString(money: string) {
    const moneyToNum = Number.parseInt(money);

    console.log(moneyToNum);

    return moneyToNum;
  }

  export function format(money: number) {
    return Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(money);
  }
}
