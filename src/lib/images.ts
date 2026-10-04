/**
 * Semantic image registry.
 * Swap `src` (and alt, once a real photograph exists) in this file.
 * Do not paste image URLs into section components.
 *
 * Most files are labeled placeholders, not facility photography.
 * hero.operations, images.services, images.howItWorks, images.industries
 * and images.about are temporary stock photographs until Bizcallhq facility
 * photos replace them.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const placeholder = (
  file: string,
  alt: string,
  width = 1600,
  height = 1067,
): ImageAsset => ({
  src: `/images/placeholders/${file}`,
  alt,
  width,
  height,
});

export const images = {
  /** Cart mark from public/images/logo.png, with the white field removed. */
  logo: {
    src: "/images/logo-mark.png",
    alt: "Bizcallhq",
    width: 1202,
    height: 730,
  },
  heroes: {
    home: {
      src: "/images/heroes/home.jpg",
      alt: "A worker sealing a carton at a packing table, with labeled boxes and stored inventory on the shelves behind the station.",
      width: 1600,
      height: 900,
    },
    about: {
      src: "/images/heroes/about.jpg",
      alt: "A worker taking a carton from a shelf while another prepares an order at a packing table.",
      width: 1600,
      height: 900,
    },
    services: {
      src: "/images/heroes/services.jpg",
      alt: "Organized warehouse shelves of cartons and storage bins, with pallet racking behind them.",
      width: 1440,
      height: 810,
    },
    contact: {
      src: "/images/heroes/contact.jpg",
      alt: "Hands labeling a packed carton, with another person labeling boxes at the same table.",
      width: 1600,
      height: 900,
    },
  },
  hero: {
    operations: {
      src: "/images/hero/packing-station.jpg",
      alt: "A worker sealing a carton at a packing table, with labeled boxes and stored inventory on the shelves behind the station.",
      width: 1620,
      height: 2250,
    },
  },
  howItWorks: {
    operation: {
      src: "/images/how-it-works/operation.jpg",
      alt: "A worker sealing a carton at a packing table, with labeled boxes on the shelves behind the station.",
      width: 1620,
      height: 2250,
    },
  },
  about: {
    operation: {
      src: "/images/about/operation.jpg",
      alt: "A worker sealing a carton with packing tape, with labeled boxes stored on the shelves beside the table.",
      width: 1280,
      height: 960,
    },
  },
  industries: {
    consumerGoods: {
      src: "/images/services/copacking.jpg",
      alt: "Hands labeling a packed carton at a work table.",
      width: 1189,
      height: 793,
    },
    ecommerce: {
      src: "/images/services/fulfillment.jpg",
      alt: "A worker taking a carton from a shelf while another prepares an order at a packing table.",
      width: 1100,
      height: 733,
    },
    retail: {
      src: "/images/services/logistics.jpg",
      alt: "Workers moving a pallet of cartons through a warehouse aisle.",
      width: 1400,
      height: 933,
    },
  },
  services: {
    copacking: {
      src: "/images/services/copacking.jpg",
      alt: "Hands labeling a packed carton, with another person labeling boxes at the same table.",
      width: 1189,
      height: 793,
    },
    warehousing: {
      src: "/images/services/warehousing.jpg",
      alt: "Organized warehouse shelves of cartons and storage bins, with pallet racking behind them.",
      width: 1400,
      height: 933,
    },
    fulfillment: {
      src: "/images/services/fulfillment.jpg",
      alt: "A worker taking a carton from a shelf while another prepares an order at a packing table.",
      width: 1100,
      height: 733,
    },
    logistics: {
      src: "/images/services/logistics.jpg",
      alt: "Workers moving a pallet of cartons through a warehouse aisle lined with stored inventory.",
      width: 1400,
      height: 933,
    },
    amazonFba: {
      src: "/images/services/fulfillment.jpg",
      alt: "Workers preparing cartons at a packing station, ready for labeled inventory to leave the operation.",
      width: 1100,
      height: 733,
    },
  },
  copacking: {
    labeling: placeholder(
      "copacking-labeling.svg",
      "Temporary placeholder for a photograph of products being labeled during co-packing.",
    ),
    kitting: placeholder(
      "copacking-kitting.svg",
      "Temporary placeholder for a photograph of kitting and bundling at a packaging station.",
    ),
  },
  warehousing: {
    shelves: placeholder(
      "warehousing-shelves.svg",
      "Temporary placeholder for a photograph of organized warehouse shelves and inventory.",
    ),
    receiving: placeholder(
      "warehousing-receiving.svg",
      "Temporary placeholder for a photograph of pallets and cartons being received.",
    ),
  },
  fulfillment: {
    pickPack: placeholder(
      "fulfillment-pick-pack.svg",
      "Temporary placeholder for a photograph of orders being picked and packed.",
    ),
    inspection: placeholder(
      "fulfillment-inspection.svg",
      "Temporary placeholder for a photograph of products being inspected before dispatch.",
    ),
  },
  logistics: {
    loading: placeholder(
      "logistics-loading.svg",
      "Temporary placeholder for a photograph of cartons and pallets being loaded for distribution.",
    ),
    dispatch: placeholder(
      "logistics-dispatch.svg",
      "Temporary placeholder for a photograph of finished orders prepared for dispatch.",
    ),
  },
} as const;
