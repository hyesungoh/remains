import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

export function useBirth() {
  return useStorage<string>({ key: "birth", instance: new Storage({ area: 'sync' }) })
}
