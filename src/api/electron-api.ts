export interface ElectronFileFilter {
  name: string;
  extensions: string[];
}

export interface ElectronApi {
  openFileDialog: (
    title: string,
    folder: string,
    filters: ElectronFileFilter
  ) => Promise<string[]>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const electronApi: ElectronApi = (window as { electronApi: ElectronApi })
  .electronApi;
