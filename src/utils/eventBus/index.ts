function EventBus() {
  //#region Functions

  const on = (event: any, callback: any): any => {
    document.addEventListener(event, (listener: any) => callback(listener.detail))
  }

  const emit: any = (event: any, payload?: any) => {
    document.dispatchEvent(new CustomEvent(event, {detail: payload}))
  }

  const destroy = (event: any, callback?: any) => {
    document.removeEventListener(event, callback)
  }

  //#endregion

  return {on, emit, destroy}
}

export default EventBus
