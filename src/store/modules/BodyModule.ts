import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBodyStore = defineStore('body', () => {
  const classes = ref<Record<string, string[]>>({})

  function setClassNameByPosition(position: string, className: string) {
    if (!classes.value[position]) {
      classes.value[position] = []
    }
    classes.value[position].push(className)
  }

  function addBodyClassName(className: string) {
    document.body.classList.add(className)
  }

  function removeBodyClassName(className: string) {
    document.body.classList.remove(className)
  }

  function addBodyAttribute(payload: { qualifiedName: string, value: string }) {
    const { qualifiedName, value } = payload
    document.body.setAttribute(qualifiedName, value)
  }

  function removeBodyAttribute(qualifiedName: string) {
    document.body.removeAttribute(qualifiedName)
  }

  function addClassName(payload: { position: string, className: string }) {
    setClassNameByPosition(payload.position, payload.className)
  }

  return {
    classes,
    setClassNameByPosition,
    addBodyClassName,
    removeBodyClassName,
    addBodyAttribute,
    removeBodyAttribute,
    addClassName,
  }
})
