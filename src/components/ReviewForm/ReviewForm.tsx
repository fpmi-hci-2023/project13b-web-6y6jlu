import { useState } from 'react';

type Rating = 1 | 2 | 3 | 4 | 5;

type ReviewFormProps = {
 onSubmit: (title: string, rate: Rating, text: string) => void;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
 const [title, setTitle] = useState('');
 const [rate, setRate] = useState<Rating>(1);
 const [text, setText] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, rate, text);
 };

 return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label htmlFor="rate">
        Rate:
        <select
          id="rate"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value) as Rating)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>

      <label htmlFor="text">
        Review:
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <button type="submit">Submit Review</button>
    </form>
 );
};

export default ReviewForm;