import { getStorageItem } from './utils';

export const getProject = function getProject(): string {
  return getStorageItem('projectId') || '1';
};
