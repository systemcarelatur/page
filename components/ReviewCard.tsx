import React from 'react';

interface ReviewData {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export default function ReviewCard({ review }: { review: ReviewData }) {
  // Use a pseudo-random value based on review time so it's consistent on hydration (if client side)
  // For server rendering, this is fine because it's static HTML
  const animDelay = ((review.time % 10) * 0.1).toFixed(1) + 's';

  return (
    <div className="tron-card service-card float-anim" style={{ animationDelay: animDelay }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '15px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.profile_photo_url}
          alt={review.author_name}
          width={50}
          height={50}
          style={{ borderRadius: '50%', border: '2px solid var(--neon-red)', objectFit: 'cover' }}
        />
        <div>
          <h3 className="card-title tron-font" style={{ margin: 0, fontSize: '1rem', textTransform: 'none' }}>
            <a href={review.author_url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              {review.author_name}
            </a>
          </h3>
          <div style={{ color: '#ffd700', fontSize: '0.9rem', marginTop: '5px', letterSpacing: '2px' }}>
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </div>
        </div>
      </div>
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9rem', fontStyle: 'italic', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        "{review.text}"
      </p>
      <div style={{ marginTop: '15px', fontSize: '0.8rem', color: 'var(--neon-red)' }}>
        {review.relative_time_description}
      </div>
      <div className="card-scanner"></div>
    </div>
  );
}
