'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// Public identifier — visible in page source wherever the pixel runs, so it lives in
// the code alongside the GA4 ID in app/layout.tsx. Override per-environment if needed.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '2033501117623302'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Meta Pixel with automatic conversion tracking for WhatsApp and call links.
 *
 * Events fired:
 *  - PageView on first load and on every client-side navigation
 *  - Lead    when any wa.me link is clicked (highest-intent action)
 *  - Contact when any tel: link is clicked
 *
 * Clicks are captured via a single delegated listener, so every WhatsApp/call
 * link across the site is tracked without touching individual components.
 *
 * Renders nothing unless NEXT_PUBLIC_META_PIXEL_ID is set.
 */
export function MetaPixel() {
  const pathname = usePathname()

  // PageView on initial load and on each route change
  useEffect(() => {
    if (!PIXEL_ID) return
    window.fbq?.('track', 'PageView')
  }, [pathname])

  useEffect(() => {
    if (!PIXEL_ID) return

    function handleClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest?.('a')
      const href = link?.getAttribute('href')
      if (!href) return

      if (href.startsWith('https://wa.me/')) {
        window.fbq?.('track', 'Lead', {
          content_name: 'WhatsApp Enquiry',
          content_category: 'Timber Enquiry',
        })
      } else if (href.startsWith('tel:')) {
        window.fbq?.('track', 'Contact', {
          content_name: 'Phone Call',
          content_category: 'Timber Enquiry',
        })
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  if (!PIXEL_ID) return null

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          alt=""
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
