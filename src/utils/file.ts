import fs from 'fs';

export const delteFile = async (fileName: string) => {
  try {
    await fs.promises.stat(fileName);
  } catch {
    return;
  }
  await fs.promises.unlink(fileName);
};
