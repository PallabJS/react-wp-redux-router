export const coreColor = {
  red: (o, s = 200) => `rgba(${s}, 0, 0, ${o})`,
  green: (o, s = 200) => `rgba(0, ${s}, 0, ${o})`,
  blue: (o, s = 200) => `rgba(0, ${s / 2}, ${s}, ${o})`,
  gray: (o, s = 200) => `rgba(${255 - s}, ${255 - s}, ${255 - s}, ${o})`,
  yellow: (o, s = 200) => `rgba(${s}, ${s}, 0, ${o})`,
  god: (o, s = 250) => `rgba(${s}, ${s}, ${s}, ${o})`,
};

export const coreStyle = {
  margin: ["5px 10px", "10px", "20px", "30px"],
  padding: ["2px 5px", "5px 10px", "10px", "20px"],
  border: (i, color) => {
    if (!color) color = gray(0, 200);
    let borders = [
      `1px solid ${color}`,
      `2px solid ${color}`,
      `3px solid ${color}`,
      `5px solid ${color}`,
    ];
    return borders[i];
  },
  borderRadius: ["2px", "5px", "10px", "20px"],
  boxShadowf: (x, y, color) => {
    return `0px 0px ${x}px ${y}px ${color}`;
  },
  boxShadow: [
    `0px 0px 1px 1px ${coreColor.gray(1, 50)}`,
    `0px 0px 10px 1px ${coreColor.gray(1, 50)}`,
    `0px 0px 20px 1px ${coreColor.gray(1, 50)}`,
    `0px 0px 50px -1px ${coreColor.gray(1, 50)}`,
  ],
  fontSize: {
    tiny: "0.7rem",
    small: "0.8rem",
    medium: "0.9rem",
    normal: "1rem",
    large: "1.2rem",
    title: "1.5rem",
    header: "2rem",
    boom: "3rem",
  },
  fontWeight: ["100", "300", "500", "700", "900"],
  textColor: {
    light: coreColor.god(1, 230),
    lightShade: coreColor.god(0.8, 180),
    dark: coreColor.god(1, 30),
    darkShade: coreColor.god(0.8, 80),
    red: coreColor.red(1, 230),
    green: coreColor.green(1, 150),
    blue: coreColor.blue(1, 200),
  },
};
