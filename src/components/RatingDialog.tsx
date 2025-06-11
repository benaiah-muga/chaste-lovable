import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface RatingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const RatingDialog = ({ isOpen, onClose }: RatingDialogProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ratings = [
    { value: 5, emoji: '😍', label: 'Excellent' },
    { value: 4, emoji: '😊', label: 'Good' },
    { value: 3, emoji: '😐', label: 'Average' },
    { value: 2, emoji: '😕', label: 'Poor' },
    { value: 1, emoji: '😞', label: 'Very Poor' }
  ];

  const handleSubmit = () => {
    if (selectedRating) {
      // Here you would typically send the rating to your backend
      console.log('Rating submitted:', { rating: selectedRating, feedback });
      setIsSubmitted(true);
      
      // Auto-close after 2 seconds
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setSelectedRating(null);
        setFeedback('');
      }, 2000);
    }
  };

  const handleClose = () => {
    onClose();
    setIsSubmitted(false);
    setSelectedRating(null);
    setFeedback('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {isSubmitted ? 'Thank You!' : 'How was your experience?'}
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center">
            {isSubmitted 
              ? 'Your feedback helps us improve our service.'
              : 'Please rate your interaction with our AI assistant'
            }
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="space-y-6 pt-4">
            {/* Rating Emojis */}
            <div className="flex justify-center space-x-4">
              {ratings.map((rating) => (
                <button
                  key={rating.value}
                  onClick={() => setSelectedRating(rating.value)}
                  className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-all duration-200 ${
                    selectedRating === rating.value
                      ? 'bg-neon-blue/20 border-2 border-neon-blue scale-110'
                      : 'hover:bg-gray-800/50 border-2 border-transparent hover:scale-105'
                  }`}
                >
                  <span className="text-2xl">{rating.emoji}</span>
                  <span className="text-xs text-gray-400">{rating.label}</span>
                </button>
              ))}
            </div>

            {/* Feedback Textarea */}
            {selectedRating && (
              <div className="space-y-2">
                <label className="text-sm text-gray-300">
                  Additional feedback (optional)
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us more about your experience..."
                  className="bg-gray-800/50 border-gray-700 text-white resize-none"
                  rows={3}
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                Skip
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!selectedRating}
                className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✨</div>
            <p className="text-gray-300">
              We appreciate your feedback and will use it to improve our service.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { RatingDialog };
