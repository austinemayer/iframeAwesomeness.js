$(document).ready(function () {
  // Look for iframes
  $("iframe").load(function () {
    // Wait for iframe to load
    var iframe = $("iframe");

    // Append the contents of the iframe's body to the parent of the iframe.
    iframe.parent()
        .append(iframe.contents()
            .find("body")
            .contents());

    // Remove the old school iframe.
    iframe.remove();
  });
});
