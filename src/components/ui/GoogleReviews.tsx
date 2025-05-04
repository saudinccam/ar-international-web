import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Loader } from '@googlemaps/js-api-loader';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGoogleReviews = async () => {
      try {
        const loader = new Loader({
          apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
          version: "weekly",
          libraries: ["places"],
          authReferrerPolicy: 'origin'
        });

        await loader.load();
        const { Map, places } = google.maps;
        
        // Create a dummy map (required for PlacesService)
        const map = new Map(document.createElement('div'));
        const service = new places.PlacesService(map);

        const placeId = 'ChIJLfyY2E_9DDkRqiP_fJ2h9YQ'; // AR International's Place ID

        service.getDetails({
          placeId: placeId,
          fields: ['reviews']
        }, (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            setReviews(place.reviews.slice(0, 6)); // Show top 6 reviews
          } else {
            setError('Failed to load reviews');
          }
          setLoading(false);
        });
      } catch (err) {
        console.error('Google Maps API Error:', err);
        setError('Failed to load Google Maps API');
        setLoading(false);
      }
    };

    loadGoogleReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
      />
    ));
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-gray-600">
        <p>{error}</p>
        <a 
          href="https://g.co/kgs/nLAFWqU"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 mt-2 inline-block"
        >
          View all reviews on Google
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            {review.profile_photo_url ? (
              <img 
                src={review.profile_photo_url} 
                alt={review.author_name}
                className="w-10 h-10 rounded-full"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">
                {review.author_name[0]}
              </div>
            )}
            <div className="ml-3">
              <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
              <div className="flex space-x-1">
                {renderStars(review.rating)}
              </div>
            </div>
          </div>
          <p className="text-gray-700">{review.text}</p>
          <p className="text-sm text-gray-500 mt-2">
            {review.relative_time_description}
          </p>
        </div>
      ))}
      <div className="text-center lg:col-span-3 mt-4">
        <a 
          href="https://g.co/kgs/nLAFWqU"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 font-medium"
        >
          View all reviews on Google →
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;