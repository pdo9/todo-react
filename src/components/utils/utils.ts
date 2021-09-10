export const wait = (milliseconds: number): Promise<Function> =>
  new Promise((resolve: Function) => setTimeout(resolve, milliseconds));
