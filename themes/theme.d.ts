// path: theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    orbs: {
      purple: string;
      mint: string;
      blur: string;
      opacity: number;
    };
  }
  interface PaletteOptions {
    orbs?: {
      purple?: string;
      mint?: string;
      blur?: string;
      opacity?: number;
    };
  }
}