import { interfaces } from "inversify";

export const logger = (planAndResolve: interfaces.Next): interfaces.Next => {
  return (args: interfaces.NextArgs) => {
    let start = new Date().getTime();
    let result = planAndResolve(args);
    let end = new Date().getTime();
    end - start > 0 &&
      console.log(
        `loaded ${args.serviceIdentifier.toString()}  ${end - start}ms`
      );
    return result;
  };
};
