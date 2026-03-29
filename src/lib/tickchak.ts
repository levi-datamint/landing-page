const TICKCHAK_EVENT_ID =
  "00TVYF0KqJmU2pEZCRDMxRmN2kHb0AVQ5MmZ1NTcH5EMTNTaKJ0Z0EEcsNWe";

export function openRegistrationForm() {
  (window as any).tickchak_set_init_iframe?.("embed", {
    ev: TICKCHAK_EVENT_ID,
    open_form: 1,
  });
}
