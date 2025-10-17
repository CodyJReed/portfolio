// Prevent flash of unstyled content (FOUC) for dark mode during SSR
export const onRenderBody = ({ setHtmlAttributes }) => {
  // Set a default class to prevent FOUC
  // The actual theme will be applied by the client-side script
  setHtmlAttributes({
    className: 'light'
  })
}
