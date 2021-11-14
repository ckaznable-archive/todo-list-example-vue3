export default function useStorage() {
  const KEY = "todo-list-storage-key"

  return {
    load() {
      const data = localStorage.getItem(KEY)
      return data && JSON.parse(data) || []
    },
    write(data) {
      localStorage.setItem(KEY, JSON.stringify(data))
    }
  }
}