/// <reference types="astro/client" />

// gtag.js is loaded as a global by the inline <script> in Layout.astro
// (which runs as is:inline and isn't type-checked itself). Declaring its
// real call shapes here — rather than typing it as `any` — keeps callers
// type-checked: wrong argument types or a missing event name still error.
declare global {
	function gtag(command: 'event', eventName: string, params?: Record<string, unknown>): void;
	function gtag(command: 'config' | 'js', targetOrDate: string | Date, params?: Record<string, unknown>): void;
}

export {};
