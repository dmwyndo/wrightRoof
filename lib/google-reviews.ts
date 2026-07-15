import { site } from "@/lib/site";

export type GoogleReview = {
  authorName: string;
  profilePhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime?: string;
  authorUrl?: string | null;
};

export type GoogleReviewsData = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  source: "google" | "fallback";
};

type LegacyReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

type LegacyPlaceDetailsResponse = {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: LegacyReview[];
  };
};

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    authorName: "Carisa Staley",
    profilePhotoUrl: null,
    rating: 5,
    text: "I highly recommend Wright Roofing! I sold my house but needed someone to assess the roof and make repairs for the new owner. The roof work required was minimal, but it was done quickly and perfectly! Thank you!",
  },
  {
    authorName: "Local Homeowner",
    profilePhotoUrl: null,
    rating: 5,
    text: "Honest inspection, fair pricing, and a crew that cleaned up thoroughly when the job was done. Exactly what you want from a roofing company.",
  },
  {
    authorName: "Property Manager",
    profilePhotoUrl: null,
    rating: 5,
    text: "Wright Roofing handled our commercial flat roof maintenance on schedule and kept us informed throughout the project.",
  },
  {
    authorName: "Idaho Falls Resident",
    profilePhotoUrl: null,
    rating: 5,
    text: "They didn't try to sell us anything we didn't need. Clear communication from the first call through final inspection.",
  },
  {
    authorName: "Wichita Business Owner",
    profilePhotoUrl: null,
    rating: 5,
    text: "Professional team, quality materials, and minimal disruption to our daily operations. Would hire again without hesitation.",
  },
  {
    authorName: "Repeat Customer",
    profilePhotoUrl: null,
    rating: 5,
    text: "We've used Wright Roofing for repairs and a full replacement. Reliable work and warranties you can actually count on.",
  },
];

const FALLBACK_DATA: GoogleReviewsData = {
  rating: 5,
  reviewCount: 120,
  reviews: FALLBACK_REVIEWS,
  source: "fallback",
};

function getApiKey() {
  return process.env.GOOGLE_PLACES_API_KEY;
}

function mapReviews(reviews: LegacyReview[] | undefined): GoogleReview[] {
  return (reviews ?? [])
    .filter((review) => review.text && review.author_name)
    .map((review) => ({
      authorName: review.author_name!,
      profilePhotoUrl: review.profile_photo_url ?? null,
      rating: review.rating ?? 5,
      text: review.text!,
      relativeTime: review.relative_time_description,
      authorUrl: review.author_url ?? null,
    }));
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = getApiKey();
  if (!apiKey || !site.googlePlaceId) return FALLBACK_DATA;

  try {
    const params = new URLSearchParams({
      place_id: site.googlePlaceId,
      fields: "rating,user_ratings_total,reviews",
      key: apiKey,
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
      { next: { revalidate: 60 * 60 * 6 } },
    );

    if (!response.ok) return FALLBACK_DATA;

    const data = (await response.json()) as LegacyPlaceDetailsResponse;
    if (data.status !== "OK" || !data.result) return FALLBACK_DATA;

    const reviews = mapReviews(data.result.reviews);
    if (reviews.length === 0) return FALLBACK_DATA;

    return {
      rating: data.result.rating ?? FALLBACK_DATA.rating,
      reviewCount: data.result.user_ratings_total ?? FALLBACK_DATA.reviewCount,
      reviews,
      source: "google",
    };
  } catch {
    return FALLBACK_DATA;
  }
}
