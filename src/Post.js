export default function Post({title="default title", body= "default body"}) {
    return (
      <div
        style={{
          padding: "10px",
          border: "solid teal 5px",
          background: "white",
          margin: "25px",
        }}
      >
        <h2>{title}</h2>
        <hr />
        <p>{body}</p>
      </div>
    );
  }