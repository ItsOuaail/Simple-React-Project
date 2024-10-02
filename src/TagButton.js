import "./TagButtonStyle.css";

export default function TagButton({ title, image }) {
  return (
    <div>
      <button className="tagButton">
        <img src={image} alt="Icon" style={{ width: '30px', marginRight: '8px' }} />
        {title}
      </button>
    </div>
  );
}
