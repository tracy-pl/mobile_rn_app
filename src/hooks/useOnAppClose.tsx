import { useEffect } from 'react';
// import * as TaskManager from 'expo-task-manager';

export function useOnAppClose() {
  useEffect(() => {
    return () => {
      // console.info('STOPPING ALL REGISTERED (BACKGROUND) TASKS');
      // TaskManager.unregisterAllTasksAsync().catch(console.error);
    };
  }, []);
}
