export type CurriedSum = {
  (nextnum?: never): number;
  (nextnum: number): CurriedSum;
};
