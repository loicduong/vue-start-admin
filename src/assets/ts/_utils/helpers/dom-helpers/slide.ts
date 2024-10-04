import { DataUtil } from '../../_DataUtil'
import { ElementStyleUtil } from '../../_ElementStyleUtil'
import { ElementAnimateUtil } from '../../ElementAnimateUtil'
import { getElementActualHeight } from './_getElementActual'
import { isVisibleElement } from './_isVisibleElement'

export function slide(
  el: HTMLElement,
  dir: string,
  speed: number,
  callback: any,
) {
  if (
    !el
    || (dir === 'up' && isVisibleElement(el) === false)
    || (dir === 'down' && isVisibleElement(el) === true)
  ) {
    return
  }

  speed = speed || 600
  const calcHeight = getElementActualHeight(el)
  let calcPaddingTop: number = 0
  let calcPaddingBottom: number = 0

  if (
    ElementStyleUtil.get(el, 'padding-top')
    && DataUtil.get(el, 'slide-padding-top') !== true
  ) {
    DataUtil.set(
      el,
      'slide-padding-top',
      ElementStyleUtil.get(el, 'padding-top'),
    )
  }

  if (
    ElementStyleUtil.get(el, 'padding-bottom')
    && DataUtil.has(el, 'slide-padding-bottom') !== true
  ) {
    DataUtil.set(
      el,
      'slide-padding-bottom',
      ElementStyleUtil.get(el, 'padding-bottom'),
    )
  }

  if (DataUtil.has(el, 'slide-padding-top')) {
    calcPaddingTop = Number.parseInt(DataUtil.get(el, 'slide-padding-top'))
  }

  if (DataUtil.has(el, 'slide-padding-bottom')) {
    calcPaddingBottom = Number.parseInt(DataUtil.get(el, 'slide-padding-bottom'))
  }

  if (dir === 'up') {
    // up
    el.style.cssText = 'display: block; overflow: hidden;'

    if (calcPaddingTop) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingTop,
        speed,
        (value: number) => {
          el.style.paddingTop = `${calcPaddingTop - value}px`
        },
      )
    }

    if (calcPaddingBottom) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingBottom,
        speed,
        (value: number) => {
          el.style.paddingBottom = `${calcPaddingBottom - value}px`
        },
      )
    }

    ElementAnimateUtil.animate(
      0,
      calcHeight || 0,
      speed,
      (value: number) => {
        el.style.height = `${(calcHeight || 0) - value}px`
      },
      () => {
        el.style.height = ''
        el.style.display = 'none'

        if (typeof callback === 'function') {
          callback()
        }
      },
    )
  }
  else if (dir === 'down') {
    // down
    el.style.cssText = 'display: block; overflow: hidden;'

    if (calcPaddingTop) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingTop,
        speed,
        (value: number) => {
          //
          el.style.paddingTop = `${value}px`
        },
        () => {
          el.style.paddingTop = ''
        },
      )
    }

    if (calcPaddingBottom) {
      ElementAnimateUtil.animate(
        0,
        calcPaddingBottom,
        speed,
        (value: number) => {
          el.style.paddingBottom = `${value}px`
        },
        () => {
          el.style.paddingBottom = ''
        },
      )
    }

    ElementAnimateUtil.animate(
      0,
      (calcHeight || 0),
      speed,
      (value: number) => {
        el.style.height = `${value}px`
      },
      () => {
        el.style.height = ''
        el.style.display = ''
        el.style.overflow = ''

        if (typeof callback === 'function') {
          callback()
        }
      },
    )
  }
}

export function slideUp(el: HTMLElement, speed: number, callback: any) {
  slide(el, 'up', speed, callback)
}

export function slideDown(el: HTMLElement, speed: number, callback: any) {
  slide(el, 'down', speed, callback)
}
