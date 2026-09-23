/**
 * Site configuration — change ASSOCIATE_TAG once to update link helpers.
 * All product hrefs in HTML also use ?tag=suchisdeals0e-20 for static/no-JS viewing.
 */
window.SUCHIS_DEALS = {
  brandName: "Suchi's Deals",
  associateTag: "suchisdeals0e-20",
  contactEmail: "suchihilmin@gmail.com",
  contactPhone: "929-760-4710",
  primeOfferUrl: "https://amzn.to/4yYUXE6",
  /** Build an Amazon product URL with the Associates tag. */
  amazonUrl: function (asin) {
    var tag = this.associateTag || "suchisdeals0e-20";
    return "https://www.amazon.com/dp/" + encodeURIComponent(asin) + "/?tag=" + encodeURIComponent(tag);
  }
};
