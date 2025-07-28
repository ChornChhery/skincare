'use client';

import { useState } from 'react';
import { Search, Filter, Eye, Check, X, Star, MessageSquare, User, Calendar, Flag } from 'lucide-react';

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [selectedReviews, setSelectedReviews] = useState<number[]>([]);

  // Mock reviews data
  const mockReviews = [
    {
      id: 1,
      productName: 'Gentle Cleanser',
      customerName: 'Sarah Johnson',
      customerEmail: 'sarah@example.com',
      rating: 5,
      title: 'Amazing product!',
      comment: 'This cleanser is absolutely fantastic. It leaves my skin feeling clean and refreshed without any dryness. I have been using it for 3 months now and my skin has never looked better.',
      date: '2024-01-25',
      status: 'pending',
      helpful: 12,
      reported: 0
    },
    {
      id: 2,
      productName: 'Vitamin C Serum',
      customerName: 'Mike Chen',
      customerEmail: 'mike@example.com',
      rating: 4,
      title: 'Good results',
      comment: 'Nice serum that brightened my skin tone. The texture is a bit sticky but the results are worth it. Would recommend to others.',
      date: '2024-01-24',
      status: 'approved',
      helpful: 8,
      reported: 0
    },
    {
      id: 3,
      productName: 'Hydrating Moisturizer',
      customerName: 'Emma Wilson',
      customerEmail: 'emma@example.com',
      rating: 2,
      title: 'Not for sensitive skin',
      comment: 'This moisturizer caused some irritation on my sensitive skin. The formula might be too strong for people with similar skin concerns.',
      date: '2024-01-23',
      status: 'approved',
      helpful: 15,
      reported: 2
    },
    {
      id: 4,
      productName: 'Retinol',
      customerName: 'David Kim',
      customerEmail: 'david@example.com',
      rating: 5,
      title: 'Excellent anti-aging',
      comment: 'This retinol product has significantly reduced my fine lines. Great value for money and gentle enough for nightly use.',
      date: '2024-01-22',
      status: 'pending',
      helpful: 6,
      reported: 0
    },
    {
      id: 5,
      productName: 'Sunscreen Anessa',
      customerName: 'Lisa Brown',
      customerEmail: 'lisa@example.com',
      rating: 1,
      title: 'Terrible experience',
      comment: 'This is the worst product ever. Completely useless and overpriced. Do not buy this garbage.',
      date: '2024-01-21',
      status: 'flagged',
      helpful: 2,
      reported: 8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'flagged':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const filteredReviews = mockReviews.filter(review => {
    const matchesSearch = 
      review.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || review.status === statusFilter;
    const matchesRating = ratingFilter === 'all' || review.rating.toString() === ratingFilter;
    
    return matchesSearch && matchesStatus && matchesRating;
  });

  const handleSelectReview = (reviewId: number) => {
    setSelectedReviews(prev => 
      prev.includes(reviewId) 
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const handleSelectAll = () => {
    setSelectedReviews(
      selectedReviews.length === filteredReviews.length 
        ? [] 
        : filteredReviews.map(review => review.id)
    );
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk ${action} for reviews:`, selectedReviews);
    setSelectedReviews([]);
  };

  const handleReviewAction = (reviewId: number, action: string) => {
    console.log(`${action} review ${reviewId}`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Review Moderation</h1>
          <p className="text-gray-600">Manage and moderate customer product reviews</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            {filteredReviews.length} reviews
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search reviews by product, customer, or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="flagged">Flagged</option>
              </select>
            </div>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedReviews.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-700">
              {selectedReviews.length} review{selectedReviews.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleBulkAction('approve')}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                Approve All
              </button>
              <button
                onClick={() => handleBulkAction('reject')}
                className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
              >
                Reject All
              </button>
              <button
                onClick={() => setSelectedReviews([])}
                className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selectedReviews.includes(review.id)}
                  onChange={() => handleSelectReview(review.id)}
                  className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{review.title}</h3>
                    {renderStars(review.rating)}
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(review.status)}`}>
                      {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {review.customerName}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {review.productName}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{review.helpful} found helpful</span>
                    {review.reported > 0 && (
                      <span className="flex items-center gap-1 text-red-600">
                        <Flag className="w-4 h-4" />
                        {review.reported} reports
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleReviewAction(review.id, 'view')}
                  className="p-2 text-gray-400 hover:text-gray-600"
                  title="View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
                {review.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleReviewAction(review.id, 'approve')}
                      className="p-2 text-green-600 hover:text-green-800"
                      title="Approve"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleReviewAction(review.id, 'reject')}
                      className="p-2 text-red-600 hover:text-red-800"
                      title="Reject"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                )}
                {review.reported > 0 && (
                  <button
                    onClick={() => handleReviewAction(review.id, 'investigate')}
                    className="p-2 text-orange-600 hover:text-orange-800"
                    title="Investigate Reports"
                  >
                    <Flag className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No reviews found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm || statusFilter !== 'all' || ratingFilter !== 'all'
              ? 'Try adjusting your search or filter criteria.'
              : 'Reviews will appear here when customers leave feedback.'
            }
          </p>
        </div>
      )}

      {/* Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <MessageSquare className="w-8 h-8 text-blue-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total Reviews</p>
              <p className="text-lg font-semibold text-gray-900">
                {mockReviews.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-yellow-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-lg font-semibold text-gray-900">
                {mockReviews.filter(r => r.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Flag className="w-8 h-8 text-red-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Flagged</p>
              <p className="text-lg font-semibold text-gray-900">
                {mockReviews.filter(r => r.status === 'flagged').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Star className="w-8 h-8 text-yellow-400" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Avg Rating</p>
              <p className="text-lg font-semibold text-gray-900">
                {(mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length).toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}