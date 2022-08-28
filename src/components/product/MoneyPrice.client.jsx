import {useMoney} from '@shopify/hydrogen/client';

/**
 * A client component that defines the currency code, currency symbol, and amount of a product
 */
export default function MoneyPrice({money}) {
  const {currencyNarrowSymbol, amount} = useMoney(money);
  return (
    <span className="text-2xl text-black font-semibold my-2 antialiased font-sans">
      {currencyNarrowSymbol}
      {amount}
    </span>
  );
}
