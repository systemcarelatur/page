"use client";

import Script from 'next/script';

export default function ShapoWidget() {
  return (
    <div className="shapo-wrapper" style={{ overflow: 'hidden', marginBottom: '-60px', paddingBottom: '10px' }}>
      <div id="shapo-widget-a277ccfa3ca7ebb2f66d"></div>
      {/* Load script and trigger manual scan to ensure widget renders even on hot reloads */}
      <Script 
        id="shapo-embed-js" 
        src="https://cdn.shapo.io/js/embed.js" 
        strategy="afterInteractive"
        onReady={() => {
          if (typeof window !== 'undefined' && (window as any).Shapo && typeof (window as any).Shapo.scan === 'function') {
            (window as any).Shapo.scan();
          }
        }}
      />
    </div>
  );
}
