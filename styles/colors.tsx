export const background = "#24282f";
export const secondaryBackground = "#3d3e45";
export const secondaryBackgroundHover = "hsla(233, 6%, 22%, 1)";

export const accentText = "#959596";

export const green = "#54cc44";
export const red = "#d63d2e";
export const gray = "#959596";

export const shadow = (color: string) => {
  if (color === green) {
    return "0 0 4px 2px hsla(121,100%,25%,0.5),0 0 8px 6px hsla(121,100%,50%,0.2)";
  } else if (color === red) {
    return "0 0 4px 2px hsla(360,100%,25%,0.5),0 0 8px 6px hsla(360,100%,50%,0.2)";
  }
};
