type TickchakEmbedOptions = {
  ev: string;
  title?: string;
  location?: string;
  color?: string;
  open_form?: number;
};

declare global {
  interface Window {
    tickchak_set_init_iframe?: (
      mode: "embed",
      options: TickchakEmbedOptions,
    ) => void;
  }
}

const TICKCHAK_CONFIG = {
  ev: "00TTilFc3dmSLhTNTVmRRpneyoEdRFFN4gXVqJmSXJDcqlDWQJme4RmZ2Mka",
  title: "יאלללה כרטיסים",
  location: "center",
  color: "yellow",
} as const;

export function openRegistrationForm() {
  window.tickchak_set_init_iframe?.("embed", {
    ...TICKCHAK_CONFIG,
    open_form: 1,
  });
}
