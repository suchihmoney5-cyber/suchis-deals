/**
 * Site configuration — change ASSOCIATE_TAG once to update link helpers.
 * All product hrefs in HTML also use ?tag=suchisdeals-20 for static/no-JS viewing.
 */
window.SUCHIS_DEALS = {
  brandName: "Suchi's Deals",
  associateTag: "suchisdeals-20",
  contactEmail: "suchihilmin@gmail.com",
  contactPhone: "929-760-4710",
  primeOfferUrl: "https://amzn.to/46WvQFM",
  /** Build an Amazon product URL with the Associates tag. */
  amazonUrl: function (asin) {
    var tag = this.associateTag || "suchisdeals-20";
    return "https://www.amazon.com/dp/" + encodeURIComponent(asin) + "/?tag=" + encodeURIComponent(tag);
  }
};
