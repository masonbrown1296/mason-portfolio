export const EMAIL_ADDRESS = 'masonbrown1296@gmail.com'

const TOAST_LINES = [
  "Copied. Don't forget to circle back.",
  "Copied. Ball's in your court now.",
  "Copied. Let's take this offline.",
  "Copied. Touch base when you can.",
  "Copied. Let's hop on a quick sync.",
  "Copied. Run it up the flagpole.",
  "Copied. Looking forward to synergizing.",
  "Copied. Let's unpack this next week.",
  "Copied. Think big picture on this one.",
  "Copied. Moving the needle starts here.",
]

export interface ToastEventDetail {
  message: string
  ttl?: number
}

/**
 * Copies the site email to the clipboard and dispatches a toast event.
 * Returns true on success. On failure (no clipboard API, browser block),
 * fires a fallback toast with the address typed out.
 */
export async function copyEmail(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(EMAIL_ADDRESS)
    const message =
      TOAST_LINES[Math.floor(Math.random() * TOAST_LINES.length)]
    window.dispatchEvent(
      new CustomEvent<ToastEventDetail>('mason-toast', {
        detail: { message },
      })
    )
    return true
  } catch {
    window.dispatchEvent(
      new CustomEvent<ToastEventDetail>('mason-toast', {
        detail: {
          message: `Clipboard shy. Grab it manually: ${EMAIL_ADDRESS}`,
          ttl: 6000,
        },
      })
    )
    return false
  }
}
